{
    //Variaveis Declaradas
    let cont = 2;
    let win;
    let botao_1 = document.getElementById('btn-1');
    let botao_2 = document.getElementById('btn-2');
    let botao_3 = document.getElementById('btn-3');
    let botao_4 = document.getElementById('btn-4');
    let botao_5 = document.getElementById('btn-5');
    let botao_6 = document.getElementById('btn-6');
    let botao_7 = document.getElementById('btn-7');
    let botao_8 = document.getElementById('btn-8');
    let botao_9 = document.getElementById('btn-9');
    let saidaPlayer = document.getElementById('saida');
    let fimJogo = document.getElementById('fimJogo');
    let jogadas = [[1,2,3], [4,5,6], [7,8,9]];
player = "X";

//Metodo para mudar de jogador
function mudarPlayer(){
    //Parte para mudar o player
    if(cont % 2 == 0){
       player = "X";
       cont++;
       if(cont % 2 == 0){
            saidaPlayer.innerHTML = "X";
        }
       else{
            saidaPlayer.innerHTML = "0";
        }
    }
    else{
            player = "0";
            cont++;
            if(cont % 2 == 0){
                saidaPlayer.innerHTML = "X";
            }
            else{
                saidaPlayer.innerHTML = "0";
            }
    }
}


//Metodo para ver a vitoria do jogador
function verVitoria(jogadas){
    if(
            //Linhas Iguais
            jogadas[0][0] == jogadas[0][1] && jogadas[0][0]==jogadas[0][2]
            ||jogadas[1][0] == jogadas[1][1] && jogadas[1][0]==jogadas[1][2]
            ||jogadas[2][0] == jogadas[2][1] && jogadas[2][0]==jogadas[2][2]

            //Colunas Iguais
            ||jogadas[0][0] == jogadas[1][0] && jogadas[0][0]==jogadas[2][0]
            ||jogadas[0][1] == jogadas[1][1] && jogadas[0][1]==jogadas[2][1]
            ||jogadas[0][2] == jogadas[1][2] && jogadas[0][2]==jogadas[2][2]

            //Diagonais
            ||jogadas[0][0] == jogadas[1][1] && jogadas[0][0]==jogadas[2][2]
            ||jogadas[0][2] == jogadas[1][1] && jogadas[0][2]==jogadas[2][0]
    )
    //Caso Haja um vecendor
    {
        win = true;
        fimJogo.innerHTML = `<h2 style="font-size: 20pt; text-align: center;" class="player" id="fimJogo">Vencedor<br> Jogador <strong style="color: yellow;"> <<< ${player} >>> </strong> <br> Clique F5 para jogar novamente</h2>`;  
    }
    //Caso Nao tenha um vencedor
    else if(cont == 11){
        fimJogo.innerHTML = `<h2 style="font-size: 20pt; text-align: center;" class="player" id="fimJogo"><strong style="color: yellow;">Empate!<br> Clique F5 para jogar novamente</strong></h2>`;  
    }else{
        if(win == undefined || win == null){
            win = false;
        }
        fimJogo.innerHTML = `<h2 style="font-size: 20pt; text-align: center;" class="player" id="fimJogo">Decorrendo...</h2>`; 
    }
}

//Metodo do envento do Botao 1
function jogar_btn1(){
    //Caso tenha vitoria
    if(win == true){
        window.alert("O Jogo terminou atualize a pagina!");
    }

    //Caso nao tenha vitoria
    else{
        //Caso o jogador tente jogar em uma posicao invalida
        if(jogadas[0][0] == "X" || jogadas[0][0] == "0")
        {
            fimJogo.innerHTML = `O Lugar escolhido ja foi jogado!!`;
        }
        //Caso o jogador jogue em uma posicao legal
        else{
            mudarPlayer();
            //No caso de ser X
            if(player == "X")
            {
                botao_1.style.background = "rgb(148, 127, 255)";
                botao_1.innerHTML = "X";
            }
            //No caso de ser 0
            else if(player == "0"){
                botao_1.style.background = "rgb(255, 115, 0)";
                botao_1.innerHTML = "0";
            }
            jogadas[0][0] = player;
            verVitoria(jogadas);
            console.log(jogadas);
        }
    }
}

//Metodo do envento do Botao 2
function jogar_btn2(){
    //Caso tenha vitoria
    if(win == true){
        window.alert("O Jogo terminou atualize a pagina!");
    }
    else{
        if(jogadas[0][1] == "X" || jogadas[0][1] == "0")
    {
        fimJogo.innerHTML = `O Lugar escolhido ja foi jogado!!`;
    }
    else{
        mudarPlayer();
        if(player == "X")
        {
            botao_2.style.background = "rgb(148, 127, 255)";
            botao_2.innerHTML = "X";
        }
        else if(player == "0"){
            botao_2.style.background = "rgb(255, 115, 0)";
            botao_2.innerHTML = "0";
        }
        jogadas[0][1] = player;
        verVitoria(jogadas);
        console.log(jogadas);
    }
    }
}

//Metodo do envento do Botao 3
function jogar_btn3(){
    //Caso tenha vitoria
    if(win == true){
        window.alert("O Jogo terminou atualize a pagina!");
    }else{
            if(jogadas[0][2] == "X" || jogadas[0][2] == "0")
        {
            fimJogo.innerHTML = `O Lugar escolhido ja foi jogado!!`;
        }
        else{
            mudarPlayer();
            if(player == "X")
            {
                botao_3.style.background = "rgb(148, 127, 255)";
                botao_3.innerHTML = "X";
            }
            else if(player == "0"){
                botao_3.style.background = "rgb(255, 115, 0)";
                botao_3.innerHTML = "0";
            }
            jogadas[0][2] = player;
            verVitoria(jogadas);
            console.log(jogadas);
        }
    }

    
}

//Metodo do envento do Botao 4
function jogar_btn4(){
    //Caso tenha vitoria
    if(win == true){
        window.alert("O Jogo terminou atualize a pagina!");
    }else{
            if(jogadas[1][0] == "X" || jogadas[1][0] == "0")
        {
            fimJogo.innerHTML = `O Lugar escolhido ja foi jogado!!`;
        }
        else{
            mudarPlayer();
            if(player == "X")
            {
                botao_4.style.background = "rgb(148, 127, 255)";
                botao_4.innerHTML = "X";
            }
            else if(player == "0"){
                botao_4.style.background = "rgb(255, 115, 0)";
                botao_4.innerHTML = "0";
            }
            jogadas[1][0] = player;
            verVitoria(jogadas);
            console.log(jogadas);
        }
    }

    
}

//Metodo do envento do Botao 5
function jogar_btn5(){
        //Caso tenha vitoria
    if(win == true){
        window.alert("O Jogo terminou atualize a pagina!");
    }else{
            if(jogadas[1][1] == "X" || jogadas[1][1] == "0")
        {
            fimJogo.innerHTML = `O Lugar escolhido ja foi jogado!!`;
        }
        else{
            mudarPlayer();
            if(player == "X")
            {
                botao_5.style.background = "rgb(148, 127, 255)";
                botao_5.innerHTML = "X";
            }
            else if(player == "0"){
                botao_5.style.background = "rgb(255, 115, 0)";
                botao_5.innerHTML = "0";
            }
            jogadas[1][1] = player;
            verVitoria(jogadas);
            console.log(jogadas);
        }
    }

    
}

//Metodo do envento do Botao 6
function jogar_btn6(){
        //Caso tenha vitoria
    if(win == true){
        window.alert("O Jogo terminou atualize a pagina!");
    }else{
            if(jogadas[1][2] == "X" || jogadas[1][2] == "0")
        {
            fimJogo.innerHTML = `O Lugar escolhido ja foi jogado!!`;
        }
        else{
            mudarPlayer();
            if(player == "X")
            {
                botao_6.style.background = "rgb(148, 127, 255)";
                botao_6.innerHTML = "X";
            }
            else if(player == "0"){
                botao_6.style.background = "rgb(255, 115, 0)";
                botao_6.innerHTML = "0";
            }
            jogadas[1][2] = player;
            verVitoria(jogadas);
            console.log(jogadas);
        }
    }

    
}

//Metodo do envento do Botao 7
function jogar_btn7(){
        //Caso tenha vitoria
     if(win == true){
        window.alert("O Jogo terminou atualize a pagina!");
    }else{
            if(jogadas[2][0] == "X" || jogadas[2][0] == "0")
        {
            fimJogo.innerHTML = `O Lugar escolhido ja foi jogado!!`;
        }
        else{
            mudarPlayer();
            if(player == "X")
            {
                botao_7.style.background = "rgb(148, 127, 255)";
                botao_7.innerHTML = "X";
            }
            else if(player == "0"){
                botao_7.style.background = "rgb(255, 115, 0)";
                botao_7.innerHTML = "0";
            }
            jogadas[2][0] = player;
            verVitoria(jogadas);
            console.log(jogadas);
        }
    }

    
}


//Metodo do envento do Botao 8
function jogar_btn8(){
        //Caso tenha vitoria
     if(win == true){
        window.alert("O Jogo terminou atualize a pagina!");
    }else{
            if(jogadas[2][1] == "X" || jogadas[2][1] == "0")
        {
            fimJogo.innerHTML = `O Lugar escolhido ja foi jogado!!`;
        }
        else{
            mudarPlayer();
            if(player == "X")
            {
                botao_8.style.background = "rgb(148, 127, 255)";
                botao_8.innerHTML = "X";
            }
            else if(player == "0"){
                botao_8.style.background = "rgb(255, 115, 0)";
                botao_8.innerHTML = "0";
            }
            jogadas[2][1] = player;
            verVitoria(jogadas);
            console.log(jogadas);
        }
    }

    
}

//Metodo do envento do Botao 9
function jogar_btn9(){
        //Caso tenha vitoria
        if(win == true){
            window.alert("O Jogo terminou atualize a pagina!");
        }else{
                if(jogadas[2][2] == "X" || jogadas[2][2] == "0")
            {
                fimJogo.innerHTML = `O Lugar escolhido ja foi jogado!!`;
            }
            else{
                mudarPlayer();
                if(player == "X")
                {
                    botao_9.style.background = "rgb(148, 127, 255)";
                    botao_9.innerHTML = "X";
                }
                else if(player == "0"){
                    botao_9.style.background = "rgb(255, 115, 0)";
                    botao_9.innerHTML = "0";
                }
                jogadas[2][2] = player;
                verVitoria(jogadas);
                console.log(jogadas);
            }
        }
    }
}


