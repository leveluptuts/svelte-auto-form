<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Field from './Field.svelte';
	import type { FormStructure } from './AutoForm.svelte';
	export let fields: FormStructure[];
	export let formData: Writable<FormStructure[]>;
	export let selfIndex = 0;
</script>

{#each fields as field, index (field)}
	{#if field.name === '-'}
		<hr />
	{:else if field.type === 'group'}
		<div class="grid">
			<svelte:self fields={field.fields} {formData} selfIndex={index} />
		</div>
	{:else if field.type === 'text' || field.type === 'number' || field.type === 'checkbox' || field.type === 'email' || field.type === 'markdown' || field.type === 'password' || field.type === 'textarea'}
		<Field
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
		<Field
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
