export const formatCreditCard = (value) => {
    return value
        .replace(/ /g, '')
        .split('')
        .map((el, i) => ((i + 1) % 4 === 0) ? el + ' ' : el)
        .join('');
}