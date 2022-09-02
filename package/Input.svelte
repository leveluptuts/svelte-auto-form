<script>
	import MultiSelect from 'svelte-multiselect';
	import Tags from 'svelte-tags-input';
	import get from 'just-safe-get';
	// Required
	export let type = 'text';
	// Optional
	export let required = false;
	export let autocomplete = '';
	export let displayInline = false;
	export let forceLowercase = false;
	export let forceUppercase = false;
	export let instructions = '';
	export let label = '';
	export let name = '';
	export let onEnter = undefined;
	export let placeholder = '';
	export let rest = {};
	export let style = '';
	// Search Select

	export let value = '';
	export let id = '';
	export let valueProperty = '';
	export let displayProperty = '';
	export let readonly = false;
	export let options = [];
	export let index = 0;
	export let formData = undefined;
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
	} else if (type === 'search-select') {
		selected = [value];
		multi_options = options;
	}

	const handleInput = (event) => {
		// in here, you can switch on type and implement
		// whatever behavior you need
		if (event?.target?.value) {
			value = event.target.value;
		}
		if (type?.match(/^(number|range)$/)) {
			value = +event.target.value;
		}
		if (forceUppercase && typeof value === 'string') value = value.toUpperCase();
		if (forceLowercase && typeof value === 'string') value = value.toLowerCase();
		// Don't use value if checkbox
		if (type === 'checkbox') {
			value = event.target.checked;
		}

		if (type === 'search-select') {
			if (typeof event.detail.option === 'object') {
				value = event.detail.option.value;
			} else {
				value = event.detail.option;
			}
		}
		formData?.update((prev) => {
			let tempData = prev;
			if (Array.isArray(index)) {
				tempData[index[0]].fields[index[1]].value = value;
			} else {
				tempData[index].value = value;
			}
			return tempData;
		});
	};
	const handleKeypress = (event) => {
		if (onEnter && event.code === 'Enter') onEnter();
	};
	function getOption(option, property) {
		if (typeof option === 'string') return option;
		return get(option, property);
	}
</script>

<div class="auto_form_field-wrapper" class:inline={displayInline}>
	<label class="auto_form_label" for={name}>
		{#if type === 'checkbox'}
			<div class="checkbox">
				<span class="auto_form_title"
					>{label}{#if required} *{/if}</span
				>
				<input
					{id}
					type="checkbox"
					checked={!!value}
					on:change={handleInput}
					{readonly}
					{required}
					{...rest}
				/>
			</div>
		{:else}
			<div>
				{#if label}
					<span class="auto_form_title"
						>{label}{#if required} *{/if}</span
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
					on:input={handleInput}
					on:keypress={handleKeypress}
					{placeholder}
					{required}
					{value}
					{name}
					{style}
					{...rest}
				/>
			{:else if type === 'tag'}
				<div class="auto_form_input">
					<Tags
						addKeys={[9]}
						tags={value}
						on:tags={(e) => {
							value = e.detail.tags;
						}}
					/>
				</div>
			{:else if type === 'select'}
				<select
					{id}
					{required}
					{value}
					on:input={handleInput}
					on:keypress={handleKeypress}
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
				<MultiSelect
					disabled={readonly}
					bind:selected
					on:change={handleInput}
					options={multi_options}
				/>
			{:else}
				<input
					{id}
					{readonly}
					{required}
					on:input={handleInput}
					on:keypress={handleKeypress}
					{name}
					{autocomplete}
					{placeholder}
					{type}
					{value}
					class="auto_form_input"
					{...rest}
				/>
			{/if}
		{/if}
	</label>
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
		margin-right: 0.6rem;
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
	.split > * {
		width: 50%;
		resize: both;
		overflow: hidden;
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
