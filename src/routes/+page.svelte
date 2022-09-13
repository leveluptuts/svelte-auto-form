<script lang="ts">
	import { enhance } from '$app/forms';
	import AutoForm from '$lib/AutoForm.svelte';
	import Input from '$lib/Input.svelte';
	import CustomButton from '$lib/CustomButton.svelte';
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

<AutoForm
	bind:data
	{schema}
	on:submit={({ detail }) => {
		console.log(detail);
	}}
>
	<CustomButton />
</AutoForm>

{JSON.stringify(data, null, 1)}

<h3>Individual Elements</h3>

<Input label="Label" placeholder="Placeholder" name="text" />

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

<form
	method="POST"
	use:enhance={(event) => {
		console.log(event);
	}}
>
	<Inputs
		fields={schema}
		{CustomButton}
		initial_data={{
			_id: 'asdfasdfasdf',
			title: 'Hello'
		}}
	/>
</form>
