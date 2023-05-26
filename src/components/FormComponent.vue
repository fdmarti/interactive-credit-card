<template>
	<form @submit.prevent="onSubmit">
		<div class="form-group">
			<label for="name">Cardholder name</label>
			<input
				type="text"
				id="name"
				v-model="formData.name"
				autocomplete="given-name"
				placeholder="e.g. Jane Appleseed"
				:class="{ error: formErrors.name.length > 0 }"
			/>
			<ErrorMessage
				v-if="formErrors.name.length > 0"
				:text="formErrors.name[0]"
			/>
		</div>
		<div class="form-group">
			<label for="cardNumber">Card number</label>
			<input
				type="text"
				v-model="formatCreditCardNumber"
				maxlength="19"
				minlength="19"
				id="cardNumber"
				placeholder="e.g. 1234 5678 9123 0000"
				@keypress="isNumber"
				:class="{ error: formErrors.cardNumber.length > 0 }"
			/>
			<ErrorMessage
				v-if="formErrors.cardNumber.length > 0"
				:text="formErrors.cardNumber[0]"
			/>
		</div>
		<div class="form-group-inputs">
			<section>
				<label for="month">Exp. Date (mm/yy)</label>
				<section class="inputs">
					<div class="date-inputs">
						<input
							type="text"
							id="month"
							v-model="formData.month"
							placeholder="MM"
							minlength="1"
							maxlength="2"
							@keypress="isNumber"
							:class="{ error: formErrors.month.length > 0 }"
						/>

						<input
							type="text"
							id="year"
							v-model="formData.year"
							placeholder="YY"
							minlength="2"
							maxlength="2"
							@keypress="isNumber"
							:class="{ error: formErrors.year.length > 0 }"
						/>
					</div>
					<ErrorMessage
						v-if="formErrors.month.length > 0"
						:text="formErrors.month[0]"
					/>
				</section>
			</section>
			<section class="cvc-inputs">
				<label for="code">cvc</label>
				<section class="inputs">
					<input
						type="text"
						id="code"
						v-model="formData.code"
						placeholder="e.g. 123"
						minlength="3"
						maxlength="3"
						@keypress="isNumber"
						:class="{ error: formErrors.code.length > 0 }"
					/>
					<ErrorMessage
						v-if="formErrors.code.length > 0"
						:text="formErrors.code[0]"
					/>
				</section>
			</section>
		</div>
		<Button text="Confirm" />
	</form>
</template>
<script setup>
	import { onBeforeMount, watch } from '@vue/runtime-core';
	import Button from './Button.vue';
	import ErrorMessage from './ErrorMessage.vue';

	import { useForm } from '../hooks/useForm';
	const {
		formData,
		formatCreditCardNumber,
		isNumber,
		onSubmit,
		formErrors,
		hasErrors,
	} = useForm();

	const emit = defineEmits(['updateForm', 'updateFormState']);

	watch(formData, (newValue, oldValue) => {
		emit('updateForm', newValue);
	});

	watch(hasErrors, (newValue, oldValue) => {
		emit('updateFormState', newValue);
	});

	onBeforeMount(() => {
		emit('updateForm', formData);
	});
</script>
<style scoped>
	.form-group {
		display: flex;
		flex-direction: column;
		margin-bottom: 25px;
	}

	.date-inputs {
		display: flex;
		gap: 1rem;
	}

	.inputs {
		display: flex;
		gap: 1rem;
	}

	.inputs input {
		width: 50px;
	}

	.form-group-inputs {
		display: flex;
		gap: 8rem;
	}

	.cvc-inputs input {
		width: 140px;
	}

	@media (max-width: 600px) {
		.form-group-inputs {
			gap: 1rem;
		}

		.cvc-inputs input {
		width: 100px;
	}
	}
</style>
