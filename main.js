



const expand_buttons = document.querySelectorAll('.expand-buttons')

function setActiveButtonAndActiveBody(e){
    const item = e.target
    expand_buttons.forEach((el)=>{
        el.classList.add('plus')
        el.classList.remove('minus')
        el.parentElement.parentElement.lastElementChild.classList.remove('active')
    })
    item.classList.add('minus')
    item.parentElement.parentElement.lastElementChild.classList.add('active')
}
expand_buttons.forEach((el)=>{
    el.addEventListener("click", setActiveButtonAndActiveBody )
})