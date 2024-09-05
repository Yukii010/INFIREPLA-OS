function calcular() {
    // Obtém o número do input
    const numero = parseInt(document.getElementById('numero').value);

    // Verifica se o número é válido
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, insira um número inteiro positivo.");
        return;
    }

    // Calcula o fatorial
    const fatorial = calcularFatorial(numero);

    // Calcula a sequência de Fibonacci
    const fibonacci = calcularFibonacci(numero);

    // Exibe os resultados
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p><strong>Fatorial de ${numero}:</strong> ${fatorial}</p>
        <p><strong>Sequência de Fibonacci até ${numero}:</strong> ${fibonacci.join(', ')}</p>
    `;
}

function calcularFatorial(n) {
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcularFibonacci(n) {
    const fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] < n) {
        const proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (proximo > n) break;
        fibonacci.push(proximo);
    }
    return fibonacci;
}
