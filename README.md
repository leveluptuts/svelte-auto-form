# Svelte Auto Form

A fast and fun form library focused on ease of use, rather than flexibility.

## Demo

https://svelte.dev/repl/a868a8e86b6f4891a6305d6d0e024b36?version=3.44.2

`npm install @leveluptuts/auto-form`

```html
<script>
	import AutoForm from '@leveluptuts/auto-form';
	import type { FormInput } from '@leveluptuts/auto-form';

	let seriesInput: FormInput[] = [
		{
			name: '_id',
			// Readonly for non edit fields, display only
			readonly: true
		},
		// Single string is a type text
		'title',
		{
			type: 'number',
			name: 'level'
		},
		'sku',
		{ name: 'order', type: 'number' },
		{ name: 'tags', type: 'tag' },
		'releaseDate',
		{
			type: 'group',
			fields: [
				{
					name: 'status',
					type: 'select',
					options: Object.values(Status)
				},
				{
					name: 'color',
					type: 'select',
					options: ['#333', '#fff']
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
					options: $authorsReference.users //options can be data from an api
				},
				{
					name: 'logo',
					type: 'select',
					options: logos,
					valueProperty: 'slug',
					displayProperty: 'slug'
				}
			]
		},

		// Dash to insert an hr row
		'-',

		// Object with group, will put inside a 2x? grid
		// Custom class property also available as an object property
		// type: 'group', fields: [], class: ''
		{ type: 'group', fields: ['price', 'salePrice', 'files', 'filesSize', 'codeLink'] }
	];

	function action() {
		// on form submit
	}
</script>

<AutoForm {action} input="{seriesInput}" />
```

## Action

function that's run on submit of the form. form data is passed into this function.

## Input

### Form Types

```typescript
export type FormTypes =
	| 'number'
	| 'text'
	| 'checkbox'
	| 'select'
	| 'tag'
	| 'textarea'
	| 'password'
	| 'email'
	| 'select'
	| 'search-select'
	| 'markdown';
```

## Sponsors

### Level Up Tutorials

https://www.leveluptutorials.com

Cutting-edge, focused & high quality video tutorials for web developers and designers
Syntax

Learn Svelte!

### https://syntax.fm/

A Tasty Treats Podcast for Web Developers. Ft Wes Bos & Scott Tolinski

Thank you!
