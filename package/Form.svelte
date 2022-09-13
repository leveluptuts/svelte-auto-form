<script>import FormRow from './FormRows.svelte';
export let fields;
export let method = 'POST';
export let action = '';
export let enhance;
// Input is the data the data that determines the form fields and types
export let schema = [];
export let CustomButton = null;
export let submitText = 'Submit';
// Starting data
export let initial_data = null;
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
