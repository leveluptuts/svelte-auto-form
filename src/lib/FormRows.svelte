<script lang="ts">
	import Input from './FormInput.svelte';
	import type { FormStructure } from './types';
	export let fields: FormStructure[];
</script>

{#if fields}
	{#each fields as field (field)}
		{#if field.name === '-'}
			<hr />
		{:else if field.type === 'group'}
			<div class="auto_form_group">
				<svelte:self fields={field.fields} />
			</div>
		{:else if field.type === 'text' || field.type === 'number' || field.type === 'checkbox' || field.type === 'email' || field.type === 'password' || field.type === 'textarea' || field.type === 'tag'}
			<Input
				type={field.type}
				label={field.label || field.name}
				name={field.name}
				style={field.style}
				readonly={field.readonly}
				required={field.required}
				placeholder={field.placeholder}
				value={field.value}
				id={field.label || field.name}
			/>
		{:else if field.type === 'select' || field.type === 'search-select'}
			<Input
				value={field.value}
				type={field?.type || 'text'}
				options={field.options}
				label={field.label || field.name}
				name={field.name}
				readonly={field.readonly}
				required={field.required}
				valueProperty={field.valueProperty}
				displayProperty={field.displayProperty}
				id={field.label || field.name}
			/>
		{/if}
	{/each}
{/if}

<style>
	.auto_form_group {
		display: grid;
		grid-template-columns: var(--af_group_grid_cols, repeat(auto-fit, minmax(300px, 1fr)));
		gap: var(--af_group_gap, 20px);
	}
</style>
