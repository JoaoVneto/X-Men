/* problemática:
    selecionar avatares de acordo com os pefil de rosto, acrescentar a animação com intuito de mostrar ao stakeholder que
    o avatar foi selecionado, ao clicar trocar a imagem do corpo do avatar correspondende ao perfil selecionado
    entrada: evento de click;
    processamente: Adicionar a animação light,adicionar ou remover o display de acordo com a necessidade;
    saida: luzes indicando o foco do personagem selecionado, e troca do corpo do personagem. */

    //variáveis de escopo global serão utilizadas durante todo projeto.
    let bodyJean = document.querySelector(".bodyJean");
    let bodyVamp = document.querySelector(".bodyVamp");
    let bodyTemp = document.querySelector(".bodyTemp");
    let bodyMagne = document.querySelector(".bodyMagne");
    let bodyWolve = document.querySelector(".bodyWolve");
    let bodyNoturn = document.querySelector(".bodyNoturn");
    let faceJean = document.querySelector(".faceJean");
    let faceVamp = document.querySelector(".faceVamp");
    let faceTemp = document.querySelector(".faceTemp");
    let faceMagne = document.querySelector(".faceMagne");
    let faceWolve = document.querySelector(".faceWolve");
    let faceNoturn = document.querySelector(".faceNoturn");

     //função que vai mostrar o corpo do avatar JeanGrey

    faceJean.addEventListener("click", showJean);

    function showJean(){
        
        
            bodyJean.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyTemp.classList.add("displayNone");
            bodyMagne.classList.add("displayNone");
            bodyWolve.classList.add("displayNone");
            bodyNoturn.classList.add("displayNone");

            Focar(faceJean);

    }

    //função para mostrar o corpo da vampira
    faceVamp.addEventListener("click", showVamp);

    function showVamp(){

        bodyVamp.classList.remove("displayNone");
        bodyJean.classList.add("displayNone");
        bodyTemp.classList.add("displayNone");
        bodyMagne.classList.add("displayNone");
        bodyWolve.classList.add("displayNone");
        bodyNoturn.classList.add("displayNone");

        Focar(faceVamp);


    }

    //função para mostrar o corpo da tempestade 

    faceTemp.addEventListener("click", showTemp);

    function showTemp(){
        
            bodyTemp.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyJean.classList.add("displayNone");
            bodyMagne.classList.add("displayNone");
            bodyWolve.classList.add("displayNone");
            bodyNoturn.classList.add("displayNone");

            Focar(faceTemp);

    }
 
    //função para mostrar o corpo do Magneto 

    faceMagne.addEventListener("click", showMagne);

    function showMagne(){
        
            bodyMagne.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyJean.classList.add("displayNone");
            bodyTemp.classList.add("displayNone");
            bodyWolve.classList.add("displayNone");
            bodyNoturn.classList.add("displayNone");

            Focar(faceMagne);

    }

    //função para mostrar o corpo da Wolve

    faceWolve.addEventListener("click", showWolve);

    function showWolve(){
        
            bodyWolve.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyJean.classList.add("displayNone");
            bodyMagne.classList.add("displayNone");
            bodyTemp.classList.add("displayNone");
            bodyNoturn.classList.add("displayNone");

            Focar(faceWolve);

    }

    //função para mostrar o corpo do Noturno

    faceNoturn.addEventListener("click", showNoturno);

    function showNoturno(){
        
            bodyNoturn.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyJean.classList.add("displayNone");
            bodyMagne.classList.add("displayNone");
            bodyWolve.classList.add("displayNone");
            bodyTemp.classList.add("displayNone");

            Focar(faceNoturn);

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




