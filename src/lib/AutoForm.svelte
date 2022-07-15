<script lang="ts">
	import type { Readable } from 'svelte/store';
	import { writable, derived } from 'svelte/store';
	import AutoFormRow from './AutoFormRow.svelte';
	import type { FormInput, FormStructure, ReturnStructure } from './types';

	// Input is the data the data that determines the form fields and types
	export let input: FormInput[] = [];
	// Starting data
	export let model;

	export let data: any = {};

	export let action = (localFormData) => {
		console.log(
			'Your form is not connected to an action. Please add an action property to <AutoForm />',
			localFormData
		);
	};

	export let submitText = 'Submit';

	function buildValues(item, model): FormStructure {
		// If the input is a string, build rest of object
		// As String
		if (typeof item === 'string') {
			// If model data exists add that as value, otherwise make it an empty string
			let value = '';
			value = model?.[item] ? model?.[item] : '';

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
			value = model?.[item.name] ? model?.[item.name] : '';

			return {
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

			value = model?.[item.name] ? model?.[item.name] : value;

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

			value = model?.[item.name] ? model?.[item.name] : value;

			return {
				...item,
				value,
				label: item.label || item.name
			};
		}
	}

	function formatData(input, model): FormStructure[] {
		return input.map((item: FormInput) => {
			if (typeof item === 'string') return buildValues(item, model);

			// SelectStructure
			// If type is "group"
			if (item?.type === 'group') {
				const groupedItems: FormStructure[] = item.fields.map((deepItem) => {
					return buildValues(deepItem, model);
				});
				return {
					...item,
					fields: groupedItems
				};
			}
			return buildValues(item, model);
		});
	}

	// First take data and massage it with model into FormStructure
	// Then take the FormStructure and turn it into a writeable

	// If value is a string, make an object with name as the
	// property and value as the value
	let formDataFormatted: FormStructure[] = formatData(input, model);

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

	// Returns the internal store based on the data
	function onSubmit() {
		action($formReturn);
	}

	$: {
		formDataFormatted = formatData(input, model);
		$formData = formDataFormatted;
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<AutoFormRow fields={$formData} {model} {formData} />
	<slot />
	<p>
		<button>{submitText}</button>
	</p>
</form>
