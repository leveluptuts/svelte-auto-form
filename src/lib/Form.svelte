<script lang="ts">
	import { enhance } from '$app/forms';
	import Inputs from './Inputs.svelte';
	import type { AutoFormSchema, InitialData } from './types';

	export let fields: AutoFormSchema = [];
	export let meta_active = false;
	// Starting data
	export let initial_data: InitialData = null;
	export let after_submit: () => void = null;
	export let before_submit: () => void = null;

	export let submit_text = 'Submit';
</script>

<form use:enhance>
	<Inputs {fields} {meta_active} {initial_data} />
	<button type="submit">{submit_text}</button>
</form>
