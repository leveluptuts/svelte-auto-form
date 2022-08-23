<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Input from './Input.svelte';
	import type { FormStructure } from './types';
	export let fields: FormStructure[];
	export let formData: Writable<FormStructure[]>;
	export let selfIndex = 0;
</script>

<!-- TODO required fields -->
{#each fields as field, index (field)}
	{#if field.name === '-'}
		<hr />
	{:else if field.type === 'group'}
		<div class="auto_form_group">
			<svelte:self fields={field.fields} {formData} selfIndex={index} />
		</div>
	{:else if field.type === 'text' || field.type === 'number' || field.type === 'checkbox' || field.type === 'email' || field.type === 'markdown' || field.type === 'password' || field.type === 'textarea'}
		<Input
			index={selfIndex ? [selfIndex, index] : index}
			{formData}
			type={field.type}
			label={field.label || field.name}
			name={field.name}
			style={field.style}
			readonly={field.readonly}
			placeholder={field.placeholder}
			value={field.value}
		/>
	{:else if field.type === 'select' || field.type === 'search-select'}
		<Input
			index={selfIndex ? [selfIndex, index] : index}
			{formData}
			type={field?.type || 'text'}
			options={field.options}
			label={field.label || field.name}
			name={field.name}
			readonly={field.readonly}
			value={field.value}
			valueProperty={field.valueProperty}
			displayProperty={field.displayProperty}
		/>
	{/if}
{/each}

<style>
	.auto_form_group {
		display: grid;
		grid-template-columns: var(--af_group_grid_cols, repeat(auto-fit, minmax(300px, 1fr)));
		gap: var(--af_group_gap, 20px);
	}
</style>
