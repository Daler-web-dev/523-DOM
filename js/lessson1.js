// поиск элементов

// let h1 = document.getElementsByTagName('h1')
// let h1_class = document.getElementsByClassName('heading')
// let h1_id = document.getElementById('heading')
// let h1 = document.querySelector('h1')
// let h1 = document.querySelector('#heading')
// let h1 = document.querySelectorAll('.heading')
let h1 = document.querySelector('span')
// let body = document.querySelector('body')


// события 
// h1.onclick = () => {
//     console.log('click!');
// }
// h1.ondblclick = () => {
//     console.log('double click!');
// }
// h1.onmouseenter = () => {
//     console.log('enter!');
// }
// h1.onmouseleave = () => {
//     console.log('leave!');
// }
// h1.onmousemove = () => {
//     console.log('move!');
// }
// body.onscroll = () => {
//     console.log('scroll!');
// }


// let box = document.querySelector('.box')
// let button = document.querySelector('#btn')

// box.onclick = () => {
//     //class
//     // if(box.classList.contains('active')) {
//     //     box.classList.remove('active')
//     // } else {
//     //     box.classList.add('active') 
//     // }
//     // box.classList.toggle('active')

//     // text
//     // h1.innerText = "<h1>Shaxcriyor ne pishite</h1>"
//     // h1.innerHTML = "<h1>Shaxcriyor ne pishite</h1>"

//     // attribute
//     // input.getAttribute('type')
//     // button.setAttribute('disabled', 'true')

//     // style

//     // box.style.visibility = ""
    

// }


let boxes = document.querySelectorAll('.box')


boxes.forEach(elem => {
    elem.onmouseenter = () => {
        elem.classList.add('active')
    }
})