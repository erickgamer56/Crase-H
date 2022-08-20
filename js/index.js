var frasesCorrect = [
    'Pintura a óleo',
    'Vou à escola',
    'Irei amanhã à Rádio Interativa',
    'Entrega a domicílio',
    'Irei às sete horas amanhã',
    'O gerente dirigiu-se à sua sala',
    'Amores à vista',
    'Estava a dançar na pista',
    'Recorreu à irmã e a ela se apegou como a uma tábua de salvação',
    'Submeteram o amor à provações difíceis',
    'Vindos de locais distantes, todos chegaram à tempo a reunião',
    'Cresce, às escondidas, o número de cidades recebendo imagens de televisão, ameaçadoras dos valores ético-culturais',
    'O autor se comparou a alguém que tem boa memória',
    'Os livros foram entregues a ele',
    'As pessoas aludem a uma causa',
    'Refiro-me às atitudes de adultos que, na verdade, levam as moças à rebeldia insensata e a uma fuga insensata',
    'Este resultado estatístico poderia pertencer a qualquer população carente',
    'À vista disso, devemos tomar sérias medidas',
    'Dia a dia a empresa foi crescendo',
    'Tudo correu às mil maravilhas',
    'Rente à parede',
    'As lágrimas caíam uma a uma de seus olhos',
    'Ele está propenso a deixar o cargo',
    'Essa proposta convém a todos',
    'Não vou aderir a modismos passageiros',
    'A empresa considerou a oferta inferior à outra',
    'Isto não seria útil a ela',
    'Sairemos às cinco da manhã',
    'Tal lei se aplica, necessariamente, a mulheres de índole violenta',
    'O bom atendimento às pessoas pobres deve ser prioridade da nova administração',
    'Não assistiu a essa operação, mas à de seu irmão.',
    'Perdi uma caneta semelhante à sua',
    'O remédio devia ser ingerido gota a gota, e não de uma só vez',
    'O seu egoísmo só era comparável à sua feiur',
    'Quem se vir em apuros, deve recorrer à justiça',
    'Não pôde entregar-se às suas ilusões',
    'Fomos a uma aldeia',
    'Voltou à casa paterna'
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
    'Recorreu ___ irmã e ___ ela se apegou como ___ uma tábua de salvação',
    'Submeteram o amor ___ provações difíceis',
    'Vindos de locais distantes, todos chegaram ___ tempo a reunião',
    'Cresce, ___ escondidas, o número de cidades recebendo imagens de televisão, ameaçadoras dos valores ético-culturais',
    'O autor se comparou ___ alguém que tem boa memória',
    'Os livros foram entregues ___ ele',
    'As pessoas aludem ___ uma causa',
    'Refiro-me ___ atitudes de adultos que, na verdade, levam as moças ___ rebeldia insensata e ___ uma fuga insensata',
    'Este resultado estatístico poderia pertencer ___ qualquer população carente',
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
    'Tal lei se aplica, necessariamente, ___ mulheres de índole violenta',
    'O bom atendimento ___ pessoas pobres deve ser prioridade da nova administração',
    'Não assistiu ___ essa operação, mas ___ de seu irmão',
    'Perdi uma caneta semelhante ___ sua',
    'O remédio devia ser ingerido gota ___ gota, e não de uma só vez',
    'O seu egoísmo só era comparável ___ sua feiura',
    'Quem se vir em apuros, deve recorrer ___ justiça',
    'Não pôde entregar-se ___ suas ilusões',
    'Fomos ___ uma aldeia',
    'Voltou ___ casa paterna',

]
acertos = 0
let start = document.querySelector(".start")
start.addEventListener("click" , () =>{
    var vida = 100
    document.querySelector(".life").style.width=vida+'%'
    document.querySelector(".init").classList.add("jogar")

    var quant = frasesFalse.length
    var aleatorio = (num) => Math.floor(Math.random() * num)
    var ale = aleatorio(quant)
    
    var primeiraFrase = frasesFalse[ale]
    var h1 = document.querySelector(".h1")
    h1.innerHTML=primeiraFrase
    var btn = document.querySelector(".btn")
    btn.addEventListener("click", ()=>{
        var inp = document.querySelector(".inp")
        var value = inp.value
        if (vida == 25){
            setTimeout(() => {
                window.location.href='index.html'
            }, 500);
        }
        if (quant == 0){
            
        }
        if (frasesCorrect.includes(value)){
            acertos++
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
            }, 100);

        }else{
            var header = document.querySelector("header")
            header.style.backgroundColor='rgb(228, 57, 57)'
            setTimeout(() => {
                header.style.backgroundColor='whitesmoke'
            }, 500);
            vida = vida - 25
        }
        document.querySelector(".life").style.width=vida+'%'
    })

    
})