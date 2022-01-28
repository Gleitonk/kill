var height = 0, width = 0, health = 4, timer = 30, creationTime

var level = window.location.search
level = level.replace('?', '')

if (level === 'normal') creationTime = 1250
else if (level === 'hard') creationTime = 1000
else if (level === 'insane') creationTime = 850

function areaAdjust() {
    height = window.innerHeight
    width = window.innerWidth
}
areaAdjust()

var stopwatch = setInterval(function () {

    if (timer <= 0)
        window.location.href = 'win.html'
    else {
        timer--
        document.getElementById('stopwatch').innerHTML = timer + 's'
    }
}, 1000)


function randomPosition() {

    if (document.getElementById('fly')) {
        document.getElementById('fly').remove()

        if (health <= 0)
            window.location.href = 'gameover.html'
        else
            document.getElementById('h' + health).className = 'far fa-heart fa-2x'

        health--
    }

    positionX = Math.floor(Math.random() * width) - 90
    positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY


    var fly = document.createElement('img')
    fly.src = './img/fly.png'
    fly.className = size() + ' ' + side()
    fly.id = 'fly'
    fly.style.left = positionX + 'px'
    fly.style.top = positionY + 'px'
    fly.style.position = 'absolute'

    fly.onclick = function () {
        fly.remove()
    }

    document.body.appendChild(fly)
}


function size() {
    var size = Math.floor(Math.random() * 3)

    switch (size) {
        case 0: return 'fly1'
        case 1: return 'fly2'
        case 2: return 'fly3'
    }

}

function side() {
    var side = Math.floor(Math.random() * 2)

    switch (side) {
        case 0: return 'side0'
        case 1: return 'side1'
    }

}