<script>import { enhance } from '$app/forms';
import Inputs from './Inputs.svelte';
export let fields = [];
export let meta_active = false;
// Starting data
export let initial_data = null;
export let after_submit = null;
export let before_submit = null;
export let submit_text = 'Submit';
</script>

<form use:enhance>
	<Inputs {fields} {meta_active} {initial_data} />
	<button type="submit">{submit_text}</button>
</form>
