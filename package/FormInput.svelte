<script>import MultiSelect from 'svelte-multiselect';
import Tags from './Tag.svelte';
import get from 'just-safe-get';
// Required
export let type = 'text';
// Optional
export let required = false;
export let autocomplete = '';
export let displayInline = false;
export let instructions = '';
export let label = '';
export let name = '';
export let placeholder = '';
export let rest = {};
export let style = '';
export let value = '';
export let id = '';
export let valueProperty = '';
export let displayProperty = '';
export let readonly = false;
export let options = [];
// For multi select
export let selected = null;
let multi_options;
$: if (type === 'search-select' && valueProperty && displayProperty) {
    let index = options.findIndex((item) => get(item, valueProperty) === value);
    selected = [{ value, label: get(options[index], displayProperty) }];
    multi_options = options.map((option) => ({
        value: get(option, valueProperty),
        label: get(option, displayProperty)
    }));
}
else if (type === 'search-select') {
    selected = [value];
    multi_options = options;
}
function getOption(option, property) {
    if (typeof option === 'string')
        return option;
    return get(option, property);
}
</script>

<div class="auto_form_field-wrapper" class:inline={displayInline}>
	{#if type === 'checkbox'}
		<div class="checkbox">
			<span class="auto_form_title"
				>{label.replaceAll('_', ' ').replaceAll('-', ' ')}{#if required} *{/if}</span
			>
			<input {id} {name} type="checkbox" {readonly} {required} checked={value} {...rest} />
			<label for={name} class="af_toggle_button" />
		</div>
	{:else}
		<label class="auto_form_label" for={name}>
			<div>
				{#if label}
					<span class="auto_form_title"
						>{label.replaceAll('_', ' ').replaceAll('-', ' ')}{#if required} *{/if}</span
					>
				{/if}
				{#if instructions}
					<span class="instructions">{instructions}</span>
				{/if}
			</div>
			{#if type === 'textarea'}
				<textarea
					{id}
					class="auto_form_input-textarea auto_form_input"
					{placeholder}
					{required}
					{name}
					{style}
					{value}
					{...rest}
				/>
			{:else if type === 'tag'}
				<div class="auto_form_input">
					<Tags
						{name}
						addKeys={[9]}
						tags={value}
						on:tags={(e) => {
							value = e.detail.tags;
						}}
					/>
				</div>
			{:else if type === 'select'}
				<select
					{value}
					{id}
					{required}
					class="auto_form_input auto_form_input-select f-select"
					{name}
				>
					{#each options as option}
						<option value={getOption(option, valueProperty)}
							>{getOption(option, displayProperty)}</option
						>
					{/each}
				</select>
			{:else if type === 'search-select'}
				<MultiSelect disabled={readonly} bind:selected options={multi_options} />
			{:else}
				<!-- {#if readonly}
					<input {value} {required} hidden {name} {type} {...rest} />
				{/if} -->
				<input
					{id}
					{value}
					{readonly}
					{required}
					{name}
					{autocomplete}
					{placeholder}
					{type}
					class="auto_form_input"
					{...rest}
				/>
			{/if}
		</label>
	{/if}
</div>

<style>
	.auto_form_field-wrapper.inline {
		display: inline-block;
	}
	.auto_form_field-wrapper .instructions {
		font-size: var(--small_font_size);
		margin-left: 1rem;
		opacity: 0.7;
	}
	.auto_form_field-wrapper .auto_form_input {
		margin-top: 0.3rem;
	}
	.auto_form_field-wrapper .checkbox {
		margin-bottom: 1rem;
	}
	.auto_form_field-wrapper .checkbox input[type='checkbox'] {
		margin-right: 0.6rem;
		transform: scale(1.6);
	}
	.auto_form_field-wrapper textarea {
		min-height: 6rem;
		padding: 0.6rem 1rem;
	}

	:global(.svelte-tags-input-tag) {
		background: var(--bg, transparent) !important;
		border-radius: 5px !important;
		color: var(--fg, black) !important;
		display: inline-block !important;
		padding: 0 5px !important;
	}

	:global(.svelte-tags-input-layout) {
		border: none !important;
	}

	:global(.svelte-tags-input-layout),
	:global(.svelte-tags-input) {
		background-color: transparent !important;
	}

	select {
		width: 100%;
	}

	.split {
		display: flex;
		gap: 10px;
	}

	:global(.multiselect .options) {
		background: var(--af_ss_bg, #fff);
		color: var(--af_ss_color, #000);
		box-shadow: var(--af_ss_shadow);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
		border-bottom: solid 1px rgba(0, 0, 0, 0.2);
	}

	.auto_form_label {
		text-transform: capitalize;
		display: block;
	}
</style>
