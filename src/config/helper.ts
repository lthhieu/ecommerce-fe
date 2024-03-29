export function convertNumberToList(number: any) {
    const integerPart = Math.floor(number);
    const fractionalPart = number - integerPart;

    const resultList = Array(integerPart).fill(1);

    if (fractionalPart > 0) {
        resultList.push(fractionalPart);
    }
    const loopValue = 5 - resultList.length
    for (let i = 1; i <= loopValue; i++) {
        resultList.push(0)
    }

    return resultList;
}
export const addCommas = (num: string) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const removeNonNumeric = (num: number) => num.toString().replace(/[^0-9]/g, "");
export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
export const convertMess = (mess: string | string[]) => {
    let result = ""
    if (mess && Array.isArray(mess)) {
        mess.forEach((i: string, idx: number) => {
            if (idx === mess.length - 1) { result += `${capitalizeFirstLetter(i)}` }
            else result += `${capitalizeFirstLetter(i)}, `
        })
    } else { result = mess }
    return result
}
export const phoneRegExp = /^(0(32|33|34|35|36|37|38|39|52|56|58|59|70|76|77|78|79|81|82|83|84|85|88|99)\d{7})$/gm
