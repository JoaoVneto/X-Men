/* problemática:
    selecionar avatares de acordo com os pefil de rosto, acrescentar a animação com intuito de mostrar ao stakeholder que
    o avatar foi selecionado, ao clicar trocar a imagem do corpo do avatar correspondende ao perfil selecionado
    entrada: evento de click;
    processamente: Adicionar a animação light,adicionar ou remover o display de acordo com a necessidade;
    saida: luzes indicando o foco do personagem selecionado, e troca do corpo do personagem. */

    //variáveis de escopo global serão utilizadas durante todo projeto.

    let body = document.querySelectorAll(".body");
    let face = document.querySelectorAll(".face");

    /*let faceJean = document.querySelector(".faceJean");
    let faceVamp = document.querySelector(".faceVamp");
    let faceTemp = document.querySelector(".faceTemp");
    let faceMagne = document.querySelector(".faceMagne");
    let faceWolve = document.querySelector(".faceWolve");
    let faceNoturn = document.querySelector(".faceNoturn");*/

     //função que vai mostrar o corpo do avatar JeanGrey

    face[0].addEventListener("click", showJean);

    function showJean(){
        
        
            body[0].classList.remove("displayNone");
            body[1].classList.add("displayNone");
            body[2].classList.add("displayNone");
            body[3].classList.add("displayNone");
            body[4].classList.add("displayNone");
            body[5].classList.add("displayNone");

            Focar(face[0]);

    }

    //função para mostrar o corpo da vampira
    face[1].addEventListener("click", showVamp);

    function showVamp(){

        body[1].classList.remove("displayNone");
        body[0].classList.add("displayNone");
        body[2].classList.add("displayNone");
        body[3].classList.add("displayNone");
        body[4].classList.add("displayNone");
        body[5].classList.add("displayNone");

        Focar(face[1]);


    }

    //função para mostrar o corpo da tempestade 

    face[2].addEventListener("click", showTemp);

    function showTemp(){
        
            body[2].classList.remove("displayNone");
            body[0].classList.add("displayNone");
            body[1].classList.add("displayNone");
            body[5].classList.add("displayNone");
            body[3].classList.add("displayNone");
            body[4].classList.add("displayNone");

            Focar(face[2]);

    }
 
    //função para mostrar o corpo do Magneto 

    face[3].addEventListener("click", showMagne);

    function showMagne(){
        
            body[3].classList.remove("displayNone");
            body[0].classList.add("displayNone");
            body[1].classList.add("displayNone");
            body[2].classList.add("displayNone");
            body[4].classList.add("displayNone");
            body[5].classList.add("displayNone");

            Focar(face[3]);

    }

    //função para mostrar o corpo da Wolve

    face[4].addEventListener("click", showWolve);

    function showWolve(){
        
            body[4].classList.remove("displayNone");
            body[0].classList.add("displayNone");
            body[1].classList.add("displayNone");
            body[2].classList.add("displayNone");
            body[3].classList.add("displayNone");
            body[5].classList.add("displayNone");

            Focar(face[4]);

    }

    //função para mostrar o corpo do Noturno

    face[5].addEventListener("click", showNoturno);

    function showNoturno(){
        
            body[5].classList.remove("displayNone");
            body[0].classList.add("displayNone");
            body[1].classList.add("displayNone");
            body[2].classList.add("displayNone");
            body[3].classList.add("displayNone");
            body[4].classList.add("displayNone");

            Focar(face[5]);

    }

    //função para adicionar animação aos perfis.

    function Focar(A){

        if(A.style.animationName = "light" ===false){
            A.style.animationName ="light"
        } else {
            A.style.transition = "none"
            //corrigir está logica 
        }



    }




