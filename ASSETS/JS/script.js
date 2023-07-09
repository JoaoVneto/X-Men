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

     //função que vai mostrar o corpo do avatar JeanGrey

    document.querySelector(".faceJean").addEventListener("click", showJean);

    function showJean(){
        
        
            bodyJean.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyTemp.classList.add("displayNone");
            bodyMagne.classList.add("displayNone");
            bodyWolve.classList.add("displayNone");
            bodyNoturn.classList.add("displayNone");

            Focar(bodyJean);

    }

    //função para mostrar o corpo da vampira
    document.querySelector(".faceVamp").addEventListener("click", showVamp);

    function showVamp(){

        bodyVamp.classList.remove("displayNone");
        bodyJean.classList.add("displayNone");
        bodyTemp.classList.add("displayNone");
        bodyMagne.classList.add("displayNone");
        bodyWolve.classList.add("displayNone");
        bodyNoturn.classList.add("displayNone");

        Focar(bodyVamp);


    }

    //função para mostrar o corpo da tempestade 

    document.querySelector(".faceTemp").addEventListener("click", showTemp);

    function showTemp(){
        
            bodyTemp.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyJean.classList.add("displayNone");
            bodyMagne.classList.add("displayNone");
            bodyWolve.classList.add("displayNone");
            bodyNoturn.classList.add("displayNone");

            Focar(bodyTemp);

    }
 
    //função para mostrar o corpo do Magneto 

    document.querySelector(".faceMagne").addEventListener("click", showMagne);

    function showMagne(){
        
            bodyMagne.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyJean.classList.add("displayNone");
            bodyTemp.classList.add("displayNone");
            bodyWolve.classList.add("displayNone");
            bodyNoturn.classList.add("displayNone");

            Focar(bodyMagne);

    }

    //função para mostrar o corpo da Wolve

    document.querySelector(".faceWolve").addEventListener("click", showWolve);

    function showWolve(){
        
            bodyWolve.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyJean.classList.add("displayNone");
            bodyMagne.classList.add("displayNone");
            bodyTemp.classList.add("displayNone");
            bodyNoturn.classList.add("displayNone");

            Focar(bodyWolve);

    }

    //função para mostrar o corpo do Noturno

    document.querySelector(".faceNoturn").addEventListener("click", showNoturno);

    function showNoturno(){
        
            bodyNoturn.classList.remove("displayNone");
            bodyVamp.classList.add("displayNone");
            bodyJean.classList.add("displayNone");
            bodyMagne.classList.add("displayNone");
            bodyWolve.classList.add("displayNone");
            bodyTemp.classList.add("displayNone");

            Focar(bodyNoturn);

    }




