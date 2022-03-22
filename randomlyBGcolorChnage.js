let BtnOne = document.getElementById('BtnOne');


let BtnTwo = document.getElementById('BtnTwo');

let bg = document.getElementById('body')

BtnOne.onclick = () => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    bg.style.backgroundColor = `rgb(${red},${green},${blue})`
}
