const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');

        if (atual) {
            const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
            const proximoElemento = document.getElementById(proximoPasso);

            atual.classList.remove('ativo');

            if (proximoElemento) {
                proximoElemento.classList.add('ativo');
            } else {
                console.error('Elemento não encontrado: ' + proximoPasso);
            }
        } else {
            console.error('Nenhum elemento ativo encontrado.');
        }
    });
});