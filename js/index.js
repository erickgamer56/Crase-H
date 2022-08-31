var frasesCorrect = [
    'Pintura .a óleo',
    'Vou .à escola',
    'Irei amanhã .à Rádio Interativa',
    'Entrega .a domicílio',
    'Irei .às sete horas amanhã',
    'O gerente dirigiu-se .à sua sala',
    'Amores .à vista',
    'Estava .a dançar na pista',
    'Submeteram o amor .à provações difíceis',
    'O autor se comparou .a alguém que tem boa memória',
    'Os livros foram entregues .a ele',
    'As pessoas aludem .a uma causa',
    '.À vista disso, devemos tomar sérias medidas',
    'Dia a dia .a empresa foi crescendo',
    'Tudo correu .às mil maravilhas',
    'Rente .à parede',
    'As lágrimas caíam uma .a uma de seus olhos',
    'Ele está propenso .a deixar o cargo',
    'Essa proposta convém .a todos',
    'Não vou aderir .a modismos passageiros',
    'A empresa considerou a oferta inferior .à outra',
    'Isto não seria útil .a ela',
    'Sairemos .às cinco da manhã',
    'Perdi uma caneta semelhante .à sua',
    'O remédio devia ser ingerido gota .a gota, e não de uma só vez',
    'O seu egoísmo só era comparável .à sua feiur',
    'Quem se vir em apuros, deve recorrer .à justiça',
    'Não pôde entregar-se .às suas ilusões',
    'Fomos .a uma aldeia',
    'Voltou .à casa paterna'
];
var frasesFalse = [
    'Pintura ___ óleo',
    'Vou ___ escola',
    'Irei amanhã ___ Rádio Interativa',
    'Entrega ___ domicílio',
    'Irei ___ sete horas amanhã',
    'O gerente dirigiu-se ___ sua sala',
    'Amores ___ vista',
    'Estava ___ dançar na pista',
    'Submeteram o amor ___ provações difíceis',
    'O autor se comparou ___ alguém que tem boa memória',
    'Os livros foram entregues ___ ele',
    'As pessoas aludem ___ uma causa',
    '___ vista disso, devemos tomar sérias medidas',
    'Dia ___ dia a empresa foi crescendo',
    'Tudo correu ___ mil maravilhas',
    'Rente ___ parede',
    'As lágrimas caíam uma ___ uma de seus olhos',
    'Ele está propenso ___ deixar o cargo',
    'Essa proposta convém ___ todos',
    'Não vou aderir ___ modismos passageiros',
    'A empresa considerou a oferta inferior ___ outra',
    'Isto não seria útil ___ ela',
    'Sairemos ___ cinco da manhã',
    'Perdi uma caneta semelhante ___ sua',
    'O remédio devia ser ingerido gota ___ gota, e não de uma só vez',
    'O seu egoísmo só era comparável ___ sua feiura',
    'Quem se vir em apuros, deve recorrer ___ justiça',
    'Não pôde entregar-se ___ suas ilusões',
    'Fomos ___ uma aldeia',
    'Voltou ___ casa paterna',

]
window.addEventListener("load", ()=>{
    
    var nome = document.querySelectorAll("#nome")
    nome.forEach(element2 => {
        element2.innerHTML=localStorage.getItem("nome")
    });

    var nomevalue = document.getElementById("nomes").value =localStorage.getItem("nome")
    if (!localStorage.getItem("nome")){
        localStorage.setItem("nome" , "Nome")
    }
    if (!localStorage.getItem("acertos")){
        localStorage.setItem("acertos" , 0)
    }
    if (!localStorage.getItem("erros")){
        localStorage.setItem("erros" , 0)
    }
    var pontos = document.querySelector("#pontos")
    pontos.innerHTML=localStorage.getItem("acertos")
    document.getElementById("pontos").innerHTML = "Acertos: "+localStorage.getItem("acertos")

    var erros = document.querySelector("#erros")
    erros.innerHTML= "Erros: "+localStorage.getItem("erros")
})

let start = document.querySelector(".start")
start.addEventListener("click" , () =>{
    var erros2 = document.querySelector("#erros2")
    erros2.innerHTML= "Erros: "+localStorage.getItem("erros")
    localStorage.setItem("acertos", 0)
    var pontos = document.querySelectorAll("#pontos")
    pontos.forEach(element2 => {
        element2.innerHTML="Acertos: "+localStorage.getItem("acertos")
    });

    var nomevalue = document.getElementById("nomes")
    var valueofnome = nomevalue.value
    localStorage.setItem("nome", valueofnome)

    var nome = document.querySelectorAll("#nome")
    nome.forEach(element2 => {
        element2.innerHTML=localStorage.getItem("nome")
    });

    var vida = 100


    document.querySelector(".life").style.width=vida+'%'
    document.querySelector(".init").classList.add("jogar")

    var quant = frasesFalse.length
    var aleatorio = (num) => Math.floor(Math.random() * num)
    var ale = aleatorio(quant)
    
    var primeiraFrase = frasesFalse[ale]
    var segundaFrase = frasesCorrect[ale]
    alert(segundaFrase)
    var h1 = document.querySelector(".h1")
    h1.innerHTML=primeiraFrase
    var sim = document.querySelector("#sim")
    sim.addEventListener("click" , function(){
        if (vida == 25){
            setTimeout(() => {
                window.location.href='index.html'
            }, 500);
        }
        if (segundaFrase.includes('.às') || segundaFrase.includes('.à') || segundaFrase.includes('.À')){
            let dellF = frasesFalse.splice(ale , 1)
            console.log(dellF)
            let dellC = frasesCorrect.splice(ale , 1)
            console.log(dellC)


            var somou = parseInt(localStorage.getItem("acertos") ) + 1
            localStorage.setItem("acertos" , somou)
            var pontos2 = document.querySelector("#pontos2")
            pontos2.innerHTML="Acertos: "+localStorage.getItem("acertos")

            var header = document.querySelector("header")
            header.style.backgroundColor='#04AA6D'
            setTimeout(() => {
                header.style.backgroundColor='whitesmoke'
            }, 500);

            setTimeout(() => {
                var quant = frasesFalse.length
                var aleatorio = (num) => Math.floor(Math.random() * num)
                ale = aleatorio(quant)
                primeiraFrase = frasesFalse[ale]
                segundaFrase = frasesCorrect[ale]
                var h1 = document.querySelector(".h1")
                h1.innerHTML=primeiraFrase
                alert(segundaFrase)
            }, 100);
        }else{
            var somou3 = parseInt(localStorage.getItem("erros") ) + 1
            localStorage.setItem("erros" , somou3)
            var pontos3 = document.querySelector("#erros2")
            pontos3.innerHTML="Erros: " +localStorage.getItem("erros")

            var header = document.querySelector("header")
            header.style.backgroundColor='rgb(228, 57, 57)'
            setTimeout(() => {
                header.style.backgroundColor='whitesmoke'
            }, 500);
            vida = vida - 25
            document.querySelector(".life").style.width=vida+'%'
        }

    })
    var nao = document.querySelector("#nao")
    nao.addEventListener("click" , function(){
        if (vida == 25){
            setTimeout(() => {
                window.location.href='index.html'
            }, 500);
        }
        if (segundaFrase.includes('.as') || segundaFrase.includes('.a') || segundaFrase.includes('.A')){
            let dellF = frasesFalse.splice(ale , 1)
            console.log(dellF)
            let dellC = frasesCorrect.splice(ale , 1)
            console.log(dellC)

            var header = document.querySelector("header")
            header.style.backgroundColor='#04AA6D'
            setTimeout(() => {
                header.style.backgroundColor='whitesmoke'
            }, 500);

            var somou = parseInt(localStorage.getItem("acertos") ) + 1
            localStorage.setItem("acertos" , somou)
            var pontos2 = document.querySelector("#pontos2")
            pontos2.innerHTML="Acertos: "+localStorage.getItem("acertos")

            setTimeout(() => {
                var quant = frasesFalse.length
                var aleatorio = (num) => Math.floor(Math.random() * num)
                ale = aleatorio(quant)
                primeiraFrase = frasesFalse[ale]
                segundaFrase = frasesCorrect[ale]
                var h1 = document.querySelector(".h1")
                h1.innerHTML=primeiraFrase
                alert(segundaFrase)
            }, 100);
        }else{
            var somou3 = parseInt(localStorage.getItem("erros") ) + 1
            localStorage.setItem("erros" , somou3)
            var pontos3 = document.querySelector("#erros2")
            pontos3.innerHTML="Erros: " +localStorage.getItem("erros")

            var header = document.querySelector("header")
            header.style.backgroundColor='rgb(228, 57, 57)'
            setTimeout(() => {
                header.style.backgroundColor='whitesmoke'
            }, 500);
            vida = vida - 25


            document.querySelector(".life").style.width=vida+'%'
        }

    })
})