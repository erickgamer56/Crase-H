var frasesCorrect = [
    'Precisamos sair às pressas',
    'Ele vai dentista hoje à tarde',
    'Às vezes eu falo demais',
    'Entre e fique à vontade',
    'Estou à procura de um emprego',
];
var frasesFalse = [
    'Precisamos sair ?s pressas',
    'Ele vai dentista hoje ? tarde',
    '?s vezes eu falo demais',
    'Entre e fique ? vontade',
    'Estou ? procura de um emprego',
]

var vida = 100
let start = document.querySelector(".start")
start.addEventListener("click" , () =>{
    document.querySelector(".life").style.width=vida+'%'
    document.querySelector(".init").classList.add("jogar")

    var quant = frasesFalse.length
    var aleatorio = (num) => Math.floor(Math.random() * num)
    var ale = aleatorio(quant)
    
    var primeiraFrase = frasesFalse[ale]
    var h1 = document.querySelector(".h1")
    h1.innerHTML=primeiraFrase
    var inp = document.querySelector(".inp")
    inp.value=primeiraFrase
    var btn = document.querySelector(".btn")
    btn.addEventListener("click", ()=>{
        var inp = document.querySelector(".inp")
        var value = inp.value
        if (vida == 25){
            setTimeout(() => {
                window.location.href='index.html'
            }, 500);
        }

        if (frasesCorrect.includes(value)){
            let dellF = frasesFalse.splice(ale , 1)
            console.log(dellF)
            let dellC = frasesCorrect.splice(ale , 1)
            console.log(dellC)

            var header = document.querySelector("header")
            header.style.backgroundColor='#04AA6D'
            setTimeout(() => {
                header.style.backgroundColor='whitesmoke'
            }, 500);
            
            setTimeout(() => {
                var quant = frasesFalse.length
                var aleatorio = (num) => Math.floor(Math.random() * num)
                ale = aleatorio(quant)
                var primeiraFrase = frasesFalse[ale]
                var h1 = document.querySelector(".h1")
                h1.innerHTML=primeiraFrase
                var inp = document.querySelector(".inp")
                inp.value=primeiraFrase
            }, 100);

        }else{
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