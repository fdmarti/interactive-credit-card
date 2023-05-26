<template>
	<button>{{ text }}</button>
</template>
<script setup>
	const { text } = defineProps(['text']);
</script>
<style scoped>
	button {
		margin: 40px 0;
		padding: 16px;
		width: 100%;
		border: none;
		border-radius: 10px;
		color: var(--white);
		background-color: var(--darkViolet);
		font-size: 18px;
	}

	button:hover {
		cursor: pointer;
		background-color: var(--darkVioletLight);
	}
</style>
