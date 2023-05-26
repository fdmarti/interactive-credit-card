<template>
	<div class="complete-section">
		<img
			src="/images/icon-complete.svg"
			class="complete-img"
			alt=" Icon complete form"
		/>
		<h2>Thank you!</h2>
		<p>We've added your card details</p>
		<Button text="Continue" />
	</div>
</template>
<script setup>
	import Button from './Button.vue';
</script>
<style scoped>
	.complete-section {
		width: 480px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.complete-img {
		width: 20%;
	}

	h2 {
		text-transform: uppercase;
		letter-spacing: 4px;
		font-size: 36px;
	}

	p {
		color: var(--darkGreyishVioleta);
		font-size: 19px;
	}

	@media (max-width: 600px) {
		.complete-section {
			width: auto;
		}
	}
</style>
