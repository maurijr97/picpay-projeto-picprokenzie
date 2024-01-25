const listaOpcoes = document.querySelector(".secaodetalhesconta_opcoestransacoes")

listaOpcoes.addEventListener("click", indentificarOpcoes)

function indentificarOpcoes(event){


  const li = event.target

  if(li.tagName == "LI"){

    const id = li.id
    console.log(id)

    const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

    removeClasseMostrar()

    secaoEscolha.classList.add("mostrar")
  }
}

function removeClasseMostrar(){
  const divs = document.querySelectorAll(".secaotransacao .container div")

  for(let i = 0; i < divs.length; i++){

    divs[i].classList.remove("mostrar")
  }
}
