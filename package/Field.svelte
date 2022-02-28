<script >import MultiSelect from 'svelte-multiselect';
import Tags from 'svelte-tags-input';
import get from 'just-safe-get';
import MarkdownRenderer from './Markdown.svelte';
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
export let value = '';
export let id = '';
export let valueProperty = '';
export let displayProperty = '';
export let readonly = false;
export let options = [];
export let index = 0;
export let formData = undefined;
const handleInput = (event) => {
    // in here, you can switch on type and implement
    // whatever behavior you need
    if (event?.target?.value) {
        value = event.target.value;
    }
    if (type?.match(/^(number|range)$/)) {
        value = +event.target.value;
    }
    if (forceUppercase && typeof value === 'string')
        value = value.toUpperCase();
    if (forceLowercase && typeof value === 'string')
        value = value.toLowerCase();
    // Don't use value if checkbox
    if (type === 'checkbox') {
        value = event.target.checked;
    }
    // Don't use value if checkbox
    if (type === 'search-select') {
        value = event.detail.token;
    }
    formData?.update((prev) => {
        let tempData = prev;
        if (Array.isArray(index)) {
            tempData[index[0]].fields[index[1]].value = value;
        }
        else {
            tempData[index].value = value;
        }
        return tempData;
    });
};
const handleKeypress = (event) => {
    if (onEnter && event.code === 'Enter')
        onEnter();
};
function getOption(option, property) {
    if (typeof option === 'string')
        return option;
    return get(option, property);
}
</script>

<div class="fresh-field-wrapper" class:inline={displayInline}>
	<label class="fresh-label" for={name}>
		{#if type === 'checkbox'}
			<div class="checkbox">
				<span class="fresh-title">{label}</span>
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
					<span class="fresh-title">{label}</span>
				{/if}
				{#if instructions}
					<span class="instructions">{instructions}</span>
				{/if}
			</div>
			{#if type === 'textarea'}
				<textarea
					{id}
					class="fresh-input-textarea fresh-input"
					on:input={handleInput}
					on:keypress={handleKeypress}
					{placeholder}
					{required}
					{value}
					{name}
					{style}
					{...rest}
				/>
			{:else if type === 'markdown'}
				<div class="split">
					<textarea
						{id}
						class="fresh-input-textarea fresh-input"
						on:input={handleInput}
						on:keypress={handleKeypress}
						{required}
						{value}
						{name}
						{...rest}
					/>
					<div>
						<MarkdownRenderer text={value + ''} />
					</div>
				</div>
			{:else if type === 'tag'}
				<Tags
					addKeys={[9]}
					tags={value}
					on:tags={(e) => {
						value = e.detail.tags;
					}}
				/>
			{:else if type === 'select'}
				<select
					{id}
					{required}
					{value}
					on:input={handleInput}
					on:keypress={handleKeypress}
					class="fresh-input fresh-input-select f-select"
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
					--sms-border="solid 1px grey"
					--sms-border-radius="3px"
					maxSelect={1}
					{readonly}
					selected={value.toString()}
					on:change={handleInput}
					{options}
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
					class="fresh-input"
					{...rest}
				/>
			{/if}
		{/if}
	</label>
</div>

<style >.fresh-field-wrapper.inline {
  display: inline-block;
}
.fresh-field-wrapper .instructions {
  font-size: var(--smallFontSize);
  margin-left: 1rem;
  opacity: 0.7;
}
.fresh-field-wrapper .fresh-input {
  margin-top: 0.3rem;
}
.fresh-field-wrapper .checkbox {
  margin-right: 0.6rem;
}
.fresh-field-wrapper .checkbox input[type=checkbox] {
  margin-right: 0.6rem;
  transform: scale(1.6);
}
.fresh-field-wrapper textarea {
  min-height: 6rem;
  padding: 0.6rem 1rem;
}

:global(.svelte-tags-input-tag) {
  background: var(--grey) !important;
  border-radius: 5px !important;
  color: var(--black) !important;
  display: inline-block !important;
  padding: 0 5px !important;
}

:global(.svelte-tags-input-layout) {
  border: 1px solid gray !important;
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
  background: var(--cardBg);
  color: var(--cardColor, --sheetColor);
  box-shadow: var(--level-3);
  border-top: solid 1px rgba(255, 255, 255, 0.1);
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
}

.fresh-label {
  text-transform: capitalize;
  display: block;
}</style>
