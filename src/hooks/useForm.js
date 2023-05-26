import { reactive, ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';

import { formatCreditCard } from '../helpers/formatCreditCard'
import { validationForm } from '../helpers/validationForm'

export const useForm = () => {
    const formData = reactive({
        name: '',
        cardNumber: '',
        month: '',
        year: '',
        code: '',
    });

    const showConfirmForm = ref(false)
    const formErrors = ref({
        name: [],
        cardNumber: [],
        month: [],
        year: [],
        code: [],
    })

    const hasErrors = ref(false)

    const formatCreditCardNumber = computed({
        get: () => formData.cardNumber,
        set(val) {
            const creditCardFormated = formatCreditCard(val)
            formData.cardNumber = creditCardFormated
        },
    });

    const isNumber = (event) => {
        const charCode = event.charCode
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            event.preventDefault();;
        } else {
            return true;
        }
    }

    const onSubmit = () => {
        const { errors } = validationForm(formData)
        formErrors.value = errors
        const amountOfErrors = Object.values(errors)
        hasErrors.value = amountOfErrors.some(el => el.length > 0)
    }

    return {
        formData,
        formatCreditCardNumber,
        showConfirmForm,
        formErrors,
        hasErrors,

        isNumber,
        onSubmit
    }

}