document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const music = document.getElementById('music');
    const lyrics = document.getElementById('lyrics');
    const leftHalf = document.querySelector('.half.left');
    const rightHalf = document.querySelector('.half.right');
    const message = document.getElementById('message');

    // Define a quantidade de linhas para exibir de cada vez
    const linesPerBlock = 2; // Alterado para 2 frases por bloco
    let currentLeftLine = 0;
    let currentRightLine = 0;

    // Função para mostrar um bloco de linhas da letra
    function showLyricsBlock(element, currentLine) {
        const lyricsArray = element.querySelectorAll('p');

        // Verifica se há linhas restantes para exibir
        if (currentLine < lyricsArray.length) {
            const endLine = Math.min(currentLine + linesPerBlock, lyricsArray.length);

            // Exibe o bloco de linhas atual
            for (let i = currentLine; i < endLine; i++) {
                lyricsArray[i].style.opacity = 1; // Torna a linha atual da letra visível
            }

            // Atualiza a posição atual para o próximo bloco
            currentLine = endLine;

            // Define um intervalo para mostrar o próximo bloco após 3 segundos
            setTimeout(() => showLyricsBlock(element, currentLine), 3000);
        }
    }

    // Função para mostrar as metades da letra após um certo tempo
    function showLyricsHalves() {
        setTimeout(() => {
            // Mostra a letra da música
            leftHalf.style.display = 'block';
            rightHalf.style.display = 'block';
            // Inicia a exibição da primeira metade da letra em blocos
            showLyricsBlock(leftHalf, currentLeftLine);
            // Inicia a exibição da segunda metade da letra em blocos
            showLyricsBlock(rightHalf, currentRightLine);
        }, 19000); // 19000 milissegundos = 19 segundos
    }

    // Adiciona um evento para iniciar a música e a exibição da letra quando o envelope é clicado
    envelope.addEventListener('click', function() {
        envelope.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            letter.style.display = 'block';
            message.style.display = 'block';
            music.play();
            // Chama a função para mostrar as metades da letra após um certo tempo
            showLyricsHalves();
        }, 500);
    });
});
