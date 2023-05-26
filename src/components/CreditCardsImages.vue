<template>
	<section class="credit-cards">
		<div class="front-card">
			<img
				src="/images/bg-card-front.png"
				class="front-card-image"
				alt="front image in the background"
			/>
			<section class="card-logo-block">
				<img
					src="/images/card-logo.svg"
					alt="image internal logo card"
					class="internal-card-logo"
				/>
			</section>
			<section class="credit-number-span">
				<span v-if="!data.cardNumber">0000 0000 0000 0000</span>
				<span v-else>{{ data.cardNumber }}</span>
			</section>
			<section class="name-span">
				<span v-if="!data.name">Jane appleseed</span>
				<span v-else>{{ data.name }}</span>
			</section>

			<div class="date-card">
				<section class="month-span">
					<span v-if="!data.month">00/</span>
					<span v-else>{{ data.month + '/' }}</span>
				</section>

				<section class="year-span">
					<span v-if="!data.year">00</span>
					<span v-else>{{ data.year }}</span>
				</section>
			</div>
		</div>

		<div class="back-card">
			<img
				src="/images/bg-card-back.png"
				class="back-card-image"
				alt="back image in the background"
			/>
			<section class="cvc-span">
				<span v-if="!data.code">000</span>
				<span v-else>{{ data.code }}</span>
			</section>
		</div>
	</section>
</template>
<script setup>
	const { data } = defineProps(['data']);
</script>
<style scoped>
	.credit-cards {
		display: flex;
		gap: 1rem;
		width: 100%;
	}

	.front-card,
	.back-card {
		position: relative;
		max-width: 500px;
	}

	.back-card {
		left: 100px;
	}
	.card-logo-block {
		position: absolute;
		top: 25px;
		left: 25px;
	}

	span {
		color: var(--lightGrayishViolet);
		letter-spacing: 4px;
	}

	.credit-number-span {
		position: absolute;
		top: 130px;
		left: 40px;
	}

	.credit-number-span span {
		font-size: 29px;
	}

	.name-span {
		position: absolute;
		top: 220px;
		left: 40px;
	}

	.name-span span {
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.date-card {
		display: flex;
		position: absolute;
		top: 220px;
		left: 365px;
	}

	.cvc-span {
		position: absolute;
		top: 125px;
		left: 400px;
	}

	@media (max-width: 1129px) {
		.credit-cards {
			flex-direction: column-reverse;
			background: url('/images/bg-main-mobile.png') center/cover no-repeat;
			padding: 20px 0;
			margin-bottom: 50px;
			height: 300px;
			align-items: center;
		}

		.front-card,
		.back-card {
			max-width: 360px;
		}

		.front-card {
			top: 45px;
			z-index: 1;
		}

		.back-card {
			top: 150px;
		}

		.credit-number-span span {
			font-size: 22px;
		}

		.name-span {
			top: 165px;
		}

		.date-card {
			top: 165px;
			left: 260px;
		}

		.cvc-span {
			top: 86px;
			left: 275px;
		}
	}

	@media (max-width: 600px) {
		.back-card {
			left: 0;
		}

		.name-span span,
		.date-card span {
			font-size: 13px;
		}
	}
</style>
