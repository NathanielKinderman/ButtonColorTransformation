var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons = [];
for(let i=0; i< all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
function buttonColorChange(buttonObject){
    if(buttonObject.value==='red'){
        buttonsRed();
    }
    else if(buttonObject.value==='green'){
        buttonsGreen();
    }
    else if(buttonObject.value==='reset'){
        buttonsColorReset();
    }
    else if(buttonObject.value==='random'){
        randomColors();
    }
}

function buttonsRed(){
    for(let i=0;i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
    
}

function buttonsGreen(){
    for(let i=0;i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
    
}

function buttonsColorReset(){
    for(let i =0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    var choices = ['btn-primary','btn-danger','btn-warning','btn-success'];
    for(i=0;i < all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}