
let all_right_btn = document.querySelector('.all_right')
let checked_right_btn = document.querySelector('.checked_right')
let checked_left_btn = document.querySelector('.checked_left')
let all_left_btn = document.querySelector('.all_left')
let box_right = document.querySelector('.box_right')
let box_left = document.querySelector('.box_left')
let container_items = document.querySelector('.container_items')
let inputs_check = document.querySelectorAll('.check')
let content = document.querySelectorAll('.content')


//all right
function post_all_right(){
    box_left.innerHTML = ''
    box_right.append(container_items) 
    all_right_btn.disabled = true
    checked_right_btn.disabled = true
    all_left_btn.disabled = false
    checked_left_btn.disabled = false
}

function post_all_left(){
    box_right.innerHTML = ''
    box_left.append(container_items)
    all_left_btn.disabled = true
    checked_left_btn.disabled = true
    all_right_btn.disabled = false
    checked_right_btn.disabled = false
}

function post_cheked_right(){

    content.forEach(item => {
        if(item.firstElementChild.checked){
            box_right.append(item)    
        }  
    })
    if(box_left.innerText == ''){
        all_right_btn.disabled = true
        checked_right_btn.disabled = true
        all_left_btn .disabled = false
        checked_left_btn.disabled = false
    }
    else if(box_left.innerText != '' && box_right.innerText != ''){
        all_right_btn.disabled = false
        checked_right_btn.disabled = false
        all_left_btn .disabled = false
        checked_left_btn.disabled = false
    }  
}


function post_cheked_left(){
    console.log('ppp');

    content.forEach(item => {
        if(item.firstElementChild.checked){
            box_left.append(item)    
        }  
    })
    if(box_right.innerText == ''){
        all_left_btn.disabled = true
        checked_left_btn.disabled = true
        all_right_btn.disabled = false
        checked_right_btn.disabled = false
    } 
    else if(box_left.innerText != '' && box_right.innerText != ''){
        all_right_btn.disabled = false
        checked_right_btn.disabled = false
        all_left_btn .disabled = false
        checked_left_btn.disabled = false
    }    
}

all_right_btn.addEventListener('click',post_all_right)
all_left_btn.addEventListener('click',post_all_left)
checked_right_btn.addEventListener('click',post_cheked_right)
checked_left_btn.addEventListener('click',post_cheked_left)

