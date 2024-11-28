



const expand_buttons = document.querySelectorAll('.expand-buttons')

function removeClassFromAllButtons(className){
    expand_buttons.forEach((el)=>{
        el.classList.remove(className)
    })
}
function addClassToAllButtons(className){
    expand_buttons.forEach((el)=>{
        el.classList.add(className)
    })
}

function setActiveButtonAndActiveBody(e){
    expand_buttons.forEach((el)=>{
        el.parentElement.parentElement.lastElementChild.classList.remove("active")
    })
    if(e.target.classList.contains('plus')){
        removeClassFromAllButtons('minus')
        addClassToAllButtons('plus')
        e.target.classList.add("minus")
        e.target.classList.remove('plus')
        e.target.parentElement.parentElement.lastElementChild.classList.add("active")
    }else{
        e.target.classList.remove('minus')
        e.target.classList.add('plus')
        e.target.parentElement.parentElement.lastElementChild.classList.remove("active")
    }
}
expand_buttons.forEach((el)=>{
    el.addEventListener("click", setActiveButtonAndActiveBody )
})