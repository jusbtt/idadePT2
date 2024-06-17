document.querySelector('.botao').addEventListener('click', function (e) {
    const name = document.querySelector('#nome').value;
    const data = new Date(document.querySelector('#data').value);

    const ano = data.getFullYear();
    const idade = 2024 - ano;

    if (!idade || !name) {
        alert('Favor informar os dados corretamente!');
    }

    let resultText;

    if (idade <= 12) {
        resultText = `Criança: ${name}`;
    }
    if (idade >= 13 && idade <= 20) {
        resultText = `Jovem: ${name}`;
    }
    if (idade >= 21 && idade <= 60) {
        resultText = `Adulto: ${name}`;
    }
    if (idade >= 61 && idade <= 100) {
        resultText = `Idoso: ${name}`;
    }
    else if (idade > 100) {
        const mort = document.querySelector('.form');
        mort.style.display = 'none';

        const caveirao = document.querySelector('.caveira');
        caveirao.style.display = 'block';

        return;
    }

    const elemento = document.querySelector('.resultado');
    elemento.innerText = resultText;
    elemento.style.display = 'block';

    document.querySelector('#nome').value = '';
    document.querySelector('#data').value = '';
});