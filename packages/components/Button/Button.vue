<script lang="ts" setup>
// type
import { ref } from 'vue'
import type { ButtonProps } from './types'
defineOptions({
	name: 'BMButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
	tag: 'button',
	nativeType: 'button',
})

const emits = defineEmits<{
	(e:"click",params:MouseEvent):void
}>()

const slots = defineSlots()

const _ref = ref<HTMLButtonElement | null>(null)
</script>

<template>
	<component
		ref="_ref"
		:is="tag"
		:type="tag === 'button' ? nativeType : void 0"
		:disabled="disabled || loading ? true : void 0"
		:class="{
			[`bl-button--${type}`]: type,
			[`bl-button--${size}`]: size,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
			'is-loading': loading,
		}"
		@click="(e) => emits('click', e)"
	>
		<slot></slot>
	</component>
</template>

<style scoped>
.bm-button {
	background-color: red;
}
</style>
