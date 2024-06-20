let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultA = document.querySelector('#resultadoA');
let resultB = document.querySelector('#resultadoB');

function somar() {
    resultA.value = Number(numero1.value) + Number(numero2.value);
    resultB.innerHTML = Number(numero1.value) + Number(numero2.value);
}

function subtrair() {
    resultA.value = Number(numero1.value) - Number(numero2.value);
    resultB.innerHTML = Number(numero1.value) - Number(numero2.value);
}

function multiplicacao() {
    resultA.value = Number(numero1.value) * Number(numero2.value);
    resultB.innerHTML = Number(numero1.value) * Number(numero2.value);
}

function divisao() {
    resultA.value = Number(numero1.value) / Number(numero2.value);
    resultB.innerHTML = Number(numero1.value) / Number(numero2.value);
}

function limpar() {
    numero1.value = "";
    numero2.value = "";
    resultA.value = "";
    resultB.innerHTML = "";
}


function imc() {
    let pes = document.querySelector('#peso');
    let alt = document.querySelector('#altura');
    let res = Number(pes.value) / (Number(alt.value) * Number(alt.value));
    document.querySelector('#calcular').value    = res.toFixed(2);

    let consideracao = document.querySelector('#consideracoes');
    if (res <= 18.5) {
        consideracao.textContent = 'Você está abaixo do peso';
    } else if (res >= 18.5 && res <= 24.9) {
        consideracao.textContent = 'Você está com o peso ideal';
    } else if (res >= 25 && res <= 29.9) {
        consideracao.textContent = 'Você está levemente acima do peso';
    } else if (res >= 30 && res <= 34.9) {
        consideracao.textContent = 'Você está em obesidade grau 1';
    } else if (res >= 35 && res <= 39.9) {
        consideracao.textContent = 'Você está em obesidade grau 2';
    } else {
        consideracao.textContent = 'Você está em obesidade grau 3';
    }

}
