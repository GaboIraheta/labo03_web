const calculateFactorial = (number) => {
    //Code
    let fact = 1;

    for (let i = 1 ; i <= number ; i++) {
        fact *= i;
    }

    return fact;
}

const requestNumber = () => {
    //Code
    let num = prompt("Ingresa un numero entero no negativo: ");

    if((!isNaN(num)) && (num >= 0)) {
        return num;
    } return false;
}

const main = () => {
    //Code
    let number = requestNumber();

    if (number === false) {
        alert("El valor ingresado no es valido (debe ser entero no negativo)");
        return;
    }

    let fact = calculateFactorial(number);

    alert(`El factorial de ${number} es: ${fact}`);
}

main();
