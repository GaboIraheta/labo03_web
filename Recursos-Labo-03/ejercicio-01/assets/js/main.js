const countVotes = (votes) => {
    //Code
    let resultado = {}; //creamos el arreglo en donde se va a guardar el objeto candidato con su numero de votos
    votes.forEach((vote) => { //recorremos el arreglo de votos recibido y al resultado con la key candidate sumamos los votos
        resultado[vote.candidate] = (resultado[vote.candidate] || 0) + 1;
    });
    return resultado; //retornamos el resultado
}

const showResults = (result) => {
    //Code
    alert("Resultados de la votacion ->"); //alerta para mostrar el texto citado
    for (let candidate in result) { //recorremos el arreglo que recibe la funcion por medio de la variable declarada candidate que es el objeto que guarda el result
        alert(`${candidate}: ${result[candidate]} votos`) //se muestra el contenido del arreglo
    }
}

const main = () => {
    let votes = [ //arreglo que almacena objetos candidate con su nombre
        { candidate: 'Alice' }, //los votos se almacenan como un objeto candidate, por cada objeto almacenado es un voto para ese objeto especifico
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];

    //Code

    const result = countVotes(votes); //result guarda el resultado de contar los votos de cada objeto candidate
    showResults(result); //muestra los resultados de la votacion
}

main();
