export const validationForm = (form) => {

    const { name, cardNumber, month, year, code } = form
    const errors = {
        name: [],
        cardNumber: [],
        month: [],
        year: [],
        code: [],
    }

    // --- Name ----
    if (!name || name.length < 3) {
        errors.name.push(`Can't be blank or has to be more than 3 characters`)
    }

    // --- Card number ---
    if (!cardNumber) {
        errors.cardNumber.push(`Can't be blank`);
    }

    if (cardNumber.length < 19) {
        errors.cardNumber.push(`Credit card number has an inappropriate number of digits`);
    }

    // --- Month ---
    if (!month) {
        errors.month.push(`Can't be blank`);
    }
    if (Number(month) > 12) {
        errors.month.push(`Has to be a valid month number`);
    }

    if (!year) {
        errors.month.push(`Can't be blank`);
        errors.year.push(`Can't be blank`);
    }

    // --- Code ---
    if (!code) {
        errors.code.push(`Can't be blank`);
    }
    if (code.length > 3) {
        errors.code.push(`Has to be a valid number`);
    }

    return {
        errors
    }
}