<template>
	<div class="error">{{ text }}</div>
</template>
<script setup>
	const { text } = defineProps(['text']);
</script>
<style scoped>
	.error {
		margin: 5px 0 0 5px;
		color: var(--errorRed);
	}
</style>
