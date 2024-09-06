 // Contato

document.getElementById('Butao-contato').addEventListener('click',function(){
    window.open('https://wa.me/5511945824804?text=A%20Paz%20do%20Senhor%20Igreja%20.', '_blank');
});

// Sobre

let indiceAtual = 0; // Índice da aba atual

function moverAbas(direcao) {
    const abas = document.querySelectorAll('.aba');
    const totalAbas = abas.length;
    
    indiceAtual += direcao;

    if (indiceAtual >= totalAbas) {
        indiceAtual = 0; // Se chegar ao fim, volta ao início
    } else if (indiceAtual < 0) {
        indiceAtual = totalAbas - 1; // Se voltar no início, vai ao final
    }

    const larguraAba = abas[0].clientWidth;
    const container = document.querySelector('.abas');
    container.style.transform = `translateX(-${indiceAtual * larguraAba}px)`;
}

