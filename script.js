function gerar() {
    let numero = document.getElementById('txtn');
    let res = document.querySelector('#tabuada');

    if (numero.value.length == 0) {
        alert("[ERRO], revise os dados colocados e tente novamente");
    } else {
        let n = Number(numero.value);
        res.innerHTML = "";

        for(let c = 1; c <= 10; c++) {
            let multi = n * c;
            res.innerHTML += `<p>${n} x ${c} = ${multi.toFixed(1)}</p>`;
        }
    }
}