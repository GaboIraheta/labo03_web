
const plus = (array) => {
    //Code
    return array[0] + array[1];
};
const subtract = (array) =>{
    //Code
    return array[0] - array[1];
} ;
const multiply = (array) =>{
    //Code
    return array[0] * array[1];
} ;
const split = (array) => {
    //Code
    if ((array[0] / array[1]) === Infinity) {
        return false;
    }
    return array[0] / array[1];
};
const requestNumber = (/*recibe*/) => {

    //Code

    let num1 = prompt("Ingrese un numero entero: ");
    let num2 = prompt("Ingrese otro numero entero: ");

    if (!isNaN(parseInt(num1)) && !isNaN(parseInt(num2))) {
        return [parseInt(num1), parseInt(num2)];
    } else return null;
};

const selectOperation = (array) => {
    
    //Code

    if (array == null) {
        return null;
    }

    let select = prompt("1-Plus | 2-Substract | 3-Multiply | 4-Split");

    let option = parseInt(select);

    if (option === 1) {
        return plus(array);
    } else if (option === 2) {
        return subtract(array);
    } else if (option === 3) {
        return multiply(array);
    } else if (option === 4) {
        return split(array);
    }
};

const main = () => {
    //Code
    let numbers = requestNumber();
    let operation = selectOperation(numbers);
    
    if (operation == null) {
        alert("Algun numero o ambos no son validos.");
    } else if (operation === false) {
        alert("Operacion no valida (division entre cero)");
    } else alert(`El resultado de la operacion es ${operation}`);
}

main();
