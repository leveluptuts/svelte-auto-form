<script lang="ts">
	import { enhance } from '$app/forms';
	import Form from '$lib/Form.svelte';
	import Input from '$lib/Input.svelte';
	import Inputs from '$lib/Inputs.svelte';

	let schema = [
		{
			name: '_id',
			// Readonly for non edit fields, display only
			readonly: true,
			meta: true
		},
		// Single string is a type text
		'title',
		{
			type: 'number',
			name: 'level'
		},
		'sku',
		{ name: 'order', type: 'number', required: true },
		{ name: 'tags', type: 'tag' },
		'releaseDate',
		{
			name: 'status',
			type: 'select',
			meta: true,
			options: ['active', 'hidden']
		},
		{
			name: 'pro',
			type: 'checkbox'
		},
		{
			name: 'authorId',
			type: 'select',
			valueProperty: '_id',
			displayProperty: 'profile.lastName',
			options: [{ _id: '123', profile: { lastName: 'Tolinski' } }]
		},

		// Dash to insert an hr row
		'-',
		// Object with group, will put inside a 2x? grid
		// Custom class property also available as an object property
		// type: 'group', fields: [], class: ''
		{ type: 'group', fields: ['price', 'salePrice', 'files', 'filesSize', 'codeLink'] }
	];

	let data = {};

	let selected = 'Hi';
</script>

<h1>🤖 Transformer</h1>

<h2>Autoform</h2>

<Form
	fields={schema}
	initial_data={{
		_id: '12345',
		title: 'Hello'
	}}
/>

<h2>Auto Inputs</h2>

<p>You would use this when you want more control over the form itself.</p>

<form
	method="POST"
	use:enhance={(event) => {
		console.log(event);
	}}
>
	<Inputs
		fields={schema}
		initial_data={{
			_id: '12345',
			title: 'Hello'
		}}
	/>
	<button type="submit">Submit</button>
</form>

<h2>Just the inputs</h2>

<Input value="Hello" />

<h3>Extra</h3>

{JSON.stringify(data, null, 1)}

<Input label="Label" placeholder="Placeholder" name="text" />

<h3>Search Select</h3>

<Input
	name="select"
	type="search-select"
	options={[
		{ _id: '1', title: 'Hi' },
		{ _id: '2', title: 'Yo' }
	]}
	valueProperty="_id"
	displayProperty="title"
/>

<Input name="select" type="search-select" options={['hello', 'hi']} bind:value={selected} />

{JSON.stringify(selected)}
