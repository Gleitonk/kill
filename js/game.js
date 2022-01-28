var height = 0, width = 0, health = 4, timer = 30, creationTime

// Remove o ? recebido junto a URL. Linha 28 em index.html
var level = window.location.search
level = level.replace('?', '')

// Seleciona o level
if (level === 'normal') creationTime = 1250
else if (level === 'hard') creationTime = 1000
else if (level === 'insane') creationTime = 850

// Atribuindo o valor da altura e largura em px da janela, também quando ajustada. Linha 22 em app.index
function areaAdjust() {
    height = window.innerHeight
    width = window.innerWidth
}
areaAdjust()

// Cronometro
var stopwatch = setInterval(function () {

    if (timer <= 0)
        window.location.href = 'win.html'
    else {
        timer--
        document.getElementById('stopwatch').innerHTML = timer + 's'
    }
}, 1000)

 // Cria o elemento img e posições randomicas 
function randomPosition() {

    // Checa se já não exista o elemento img criado, caso exista, remove e subtrai 1 de vida
    if (document.getElementById('fly')) {
        document.getElementById('fly').remove()
    
        if (health <= 0)
            window.location.href = 'gameover.html'
        else
            document.getElementById('h' + health).className = 'far fa-heart fa-2x'

        health--
    }

    // Cria um vaor aleatorio emtre 0 e 1 e multiplica as var width e height para criar posições aleatorias do elemento
    // É subtraido 90px para que o elemento não sai da area da janela e crie uma barra de rolagem
    positionX = Math.floor(Math.random() * width) - 90
    positionY = Math.floor(Math.random() * height) - 90

    
    // Resolvendo o problema acima ao subtrair 90px e o elemento sumir da tela, pelo valor estar negativo em px
    // Testa se var position é menor que 0, então var = 0, se não, mantem seu valor
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    // Criando o elemento img de id fly
    var fly = document.createElement('img')
    fly.src = './img/fly.png'
    fly.className = size() + ' ' + side()
    fly.id = 'fly'
    fly.style.left = positionX + 'px'
    fly.style.top = positionY + 'px'
    fly.style.position = 'absolute'

    // Evento onclick, que ao usuário clicar no elemento, ele é removido
    fly.onclick = function () {
        fly.remove()
    }
    
    document.body.appendChild(fly)
}

// Alterando o tamanho do elemento criado. 3 tamanhos diferentes: linha 
function size() {
    var size = Math.floor(Math.random() * 3)

    switch (size) {
        case 0: return 'fly1'
        case 1: return 'fly2'
        case 2: return 'fly3'
    }
}

// Alterando os lados do elemento criado
function side() {
    var side = Math.floor(Math.random() * 2)

    switch (side) {
        case 0: return 'side0'
        case 1: return 'side1'
    }
}
