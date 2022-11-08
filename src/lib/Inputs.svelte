<script lang="ts">
	import FormRows from './FormRows.svelte';
	import type { AutoFormSchema, FormInput, FormStructure, InitialData } from './types';

	export let fields: AutoFormSchema = [];
	export let meta_active = false;

	// Starting data
	export let initial_data: InitialData = null;

	let fields_formatted: FormStructure[] = formatData(fields, initial_data);
	$: meta_fields = fields_formatted.filter((field) => field?.meta);
	$: standard_fields = fields_formatted.filter((field) => !field?.meta);

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
</script>

<div class="af-zone-wrapper">
	{#if meta_fields.length > 0}
		<button type="button" on:click|preventDefault={() => (meta_active = true)}>Show Meta</button>

		<div class:active={meta_active} class="af-meta">
			<h3>Meta Data</h3>
			<button type="button" on:click|preventDefault={() => (meta_active = false)}>Hide Meta</button>
			<FormRows fields={meta_fields} />
		</div>
	{/if}
	<div class="af-standard">
		<FormRows fields={standard_fields} />
	</div>
</div>

<slot />
