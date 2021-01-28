let div = document.createElement('div')
div.style.border = '1px solid red'
div.style.height = '100px'
div.style.width = '100px'
div.id = 'demo'
document.body.appendChild(div)
let x = false
let position = [0, 0]
div.onmousedown = (e) => {
    x = true
    position = [e.clientY, e.clientX]
}
document.onmousemove = (e) => {
    if (x === true) {
        let newx = e.clientX - position[1]
        let newy = e.clientY - position[0]
        let top = parseInt(div.style.top!) || 0
        let left = parseInt(div.style.left!) || 0
        div.style.top = top + newy + 'px'
        div.style.left = left + newx + 'px'
        position = [e.clientY, e.clientX]
    }
}
document.onmouseup = (e) => {
    x = false
}