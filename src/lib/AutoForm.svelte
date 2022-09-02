<script lang="ts">
	import type { Readable } from 'svelte/store';

	import { writable, derived } from 'svelte/store';
	import AutoFormRow from './AutoFormRow.svelte';
	import { createEventDispatcher } from 'svelte';
	import type {
		FormInput,
		FormStructure,
		ReturnStructure,
		InitialData,
		AutoFormSchema
	} from './types';

	// TODO: search select work with nested display properties

	// Input is the data the data that determines the form fields and types
	export let schema: AutoFormSchema = [];

	// Starting data
	export let initial_data: InitialData = null;
	export let show_submit: boolean = true;

	export let data: any = {};
	export let CustomButton = null;

	const dispatch = createEventDispatcher();

	export let submitText = 'Submit';

	function buildValues(item, initial_data): FormStructure {
		// If the input is a string, build rest of object
		// As String
		if (typeof item === 'string') {
			// If model data exists add that as value, otherwise make it an empty string
			let value = '';
			value = initial_data?.[item] ? initial_data?.[item] : '';

			return {
				name: item,
				label: item,
				value,
				type: 'text'
			};
		}

		// If item has a name, but no type, it's a string / text
		// As StringInput
		if (item?.name && !item?.type) {
			// If model data exists add that as value, otherwise make it an empty string
			let value = '';
			value = initial_data?.[item.name] ? initial_data?.[item.name] : '';

			return {
				...item,
				name: item.name,
				label: item.label || item.name,
				value,
				type: 'text'
			};
		}

		// SelectStructure
		// If type is "select"
		if (item.type === 'select' || item.type === 'search-select') {
			// If model data exists add that as value, otherwise make it an empty string
			// Get default value
			let value: string | boolean | number | any[] = '';

			value = initial_data?.[item.name] ? initial_data?.[item.name] : value;

			return {
				...item,
				value,
				label: item.label || item.name
			};
		}

		// StandardInput
		// With Name AND type
		if (item.name && item.type) {
			// If model data exists add that as value, otherwise make it an empty string
			// Get default value
			let value: string | boolean | number | any[] = '';
			if (item.type === 'checkbox') value = false;
			if (item.type === 'tag') value = [];
			if (item.type === 'number') value = 0;

			value = initial_data?.[item.name] ? initial_data?.[item.name] : value;

			return {
				...item,
				value,
				label: item.label || item.name
			};
		}
	}

	function formatData(schema: FormInput[], initial_data): FormStructure[] {
		return schema.map((item: FormInput) => {
			if (typeof item === 'string') return buildValues(item, initial_data);

			// SelectStructure
			// If type is "group"
			if (item?.type === 'group') {
				const groupedItems: FormStructure[] = item.fields.map((deepItem) => {
					return buildValues(deepItem, initial_data);
				});
				return {
					...item,
					fields: groupedItems
				};
			}
			return buildValues(item, initial_data);
		});
	}

	// First take data and massage it with model into FormStructure
	// Then take the FormStructure and turn it into a writeable

	// If value is a string, make an object with name as the
	// property and value as the value
	let formDataFormatted: FormStructure[] = formatData(schema, initial_data);

	// Form data should be the TRUTH of the form state.
	// ie is always up to date with what is displayed in the input
	const formData = writable<FormStructure[]>(formDataFormatted);

	// This is the reverse of the format data bit. This takes the writable store
	// and "-"
	export const formReturn: Readable<ReturnStructure> = derived(formData, ($formDataInt) => {
		return $formDataInt.reduce((prev, current) => {
			let tempObject = {};

			// Formats Group Structure
			if (current.type === 'group') {
				const groupedFields = current.fields.reduce((prev, current) => {
					prev[current.name] = current.value;
					return prev;
				}, {});
				return {
					...prev,
					...groupedFields
				};
			}

			// Removes "-"
			if (current.name === '-') return prev;

			// and turns it into a data object similar to the original structure however removing things like "group"
			tempObject[current.name] = current.value;
			return {
				...prev,
				...tempObject
			};
		}, {});
	});

	// Pass the data up to bound variable
	$: data = $formReturn;

	$: {
		formDataFormatted = formatData(schema, initial_data);
		$formData = formDataFormatted;
	}
</script>

<form on:submit|preventDefault={() => dispatch('submit', $formReturn)}>
	<AutoFormRow fields={$formData} {formData} />
	<slot />
	{#if show_submit && !CustomButton}
		<p>
			<button>{submitText}</button>
		</p>
	{/if}
	{#if CustomButton}
		<svelte:component this={CustomButton} />
	{/if}
</form>
