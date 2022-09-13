<script lang="ts">
	import FormRow from './FormRows.svelte';
	import type { AutoFormSchema, FormStructure, InitialData } from './types';

	export let fields: FormStructure[];
	export let method: 'GET' | 'POST' = 'POST';
	export let action: string = '';
	export let enhance;

	// Input is the data the data that determines the form fields and types

	export let schema: AutoFormSchema = [];
	export let CustomButton = null;
	export let submitText = 'Submit';

	// Starting data
	export let initial_data: InitialData = null;
</script>

<form {method} action={action ?? null} use:enhance>
	<FormRow {fields} />
	<slot />

	{#if CustomButton}
		<svelte:component this={CustomButton} />
	{:else}
		<p>
			<button type="submit">{submitText}</button>
		</p>
	{/if}
</form>
