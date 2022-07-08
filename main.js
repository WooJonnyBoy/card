

(function() {
    document.addEventListener('click', bolloons)
    let cont = document.querySelector('.conteiner')
    function bolloons(e) {
        let boxinner = document.createElement('div')
        let div = document.createElement('div')
        boxinner.className = 'boxinner'
        div.className = 'box'
        div.style.top = `${e.clientY - 80}px`
        div.style.left = `${e.clientX - 80}px`
        boxinner.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
        cont.append(div)
        div.append(boxinner)
        remove(div)
    }
})();

function remove(elem) {
    setTimeout(()=> {
        elem.remove()
    }, random(1000, 20000)) 
}

function random(min, max) {
    let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1))
    return rand
}
