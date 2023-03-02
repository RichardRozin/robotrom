const ajuste = document.querySelectorAll('[data-ajuste]')
const estatistica = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

ajuste.forEach(function(elemento){
    elemento.addEventListener('click', function(evento){
        alteraContador(evento.target.outerText, evento.target.parentNode)
        estatisticaRobo(evento.target.dataset.peca ,evento.target.outerText)
    })
})


function alteraContador(sinal, pai){
    const valor = pai.querySelector('[data-contador]')
    if (sinal == '+'){
        valor.value = Number(valor.value) + 1
    }else{
        valor.value = Number(valor.value) - 1
    }
}

function estatisticaRobo(peca, operacao){
    estatistica.forEach(function(elemento){
        if (operacao == '+'){
            elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }else{
            elemento.textContent = Number(elemento.textContent) - (pecas[peca][elemento.dataset.estatistica])
        }
        
    })
}