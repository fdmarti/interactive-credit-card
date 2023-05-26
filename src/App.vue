<template>
	<CreditCardsImages :data="formData.value" v-if="formData.value" />
	<CompleteState v-if="showCompleteState" />

	<FormComponent
		@updateForm="updateFormData"
		@updateFormState="updateFormState"
		v-else
	/>
</template>
<script setup>
	import { reactive, ref } from '@vue/reactivity';
	import { onMounted } from '@vue/runtime-core';

	import {
		CreditCardsImages,
		FormComponent,
		CompleteState,
	} from './components';

	const formData = reactive({});
	const showCompleteState = ref(false);

	const updateFormData = (data) => {
		if (data !== undefined) {
			formData.value = data;
		}
	};

	const updateFormState = (state) => {
		if (!state) showCompleteState.value = true;
	};

	onMounted(() => {
		formData.value = {
			name: '',
			cardNumber: '',
			month: '',
			year: '',
			code: '',
		};
	});

	updateFormData(formData.value);
</script>
