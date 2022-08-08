const submitBtn = document.getElementById("button");
const ratingValues = document.getElementsByClassName("numbers");
const currStates = toGetListState(ratingValues);

const pagesDisplay = document.getElementsByClassName('pages');
const indexChoiceDisplay = document.getElementById('displayChoice');
var indexChoice = 0;


for(let i=0 ; i < ratingValues.length ; i++){
let d = i + 1;
ratingValues[i].addEventListener('click',function (){
    if (ratingValues[i].getAttribute('state') == 'active'){
        ratingValues[i].setAttribute('state','not-active');
    } else {
        ratingValues[i].setAttribute('state','active');
        coloriseOnlyClicked(ratingValues, i);
        indexChoice = i + 1;
    }
})
}

submitBtn.addEventListener('click',function() {
    const listOfCurrentState = toGetListState(ratingValues);
    const state='active'

    if (listOfCurrentState.includes(state)){
        pagesDisplay[0].style.display = 'none';
        pagesDisplay[1].style.display = '';
        indexChoiceDisplay.innerHTML = 'You selected ' + indexChoice + ' out of 5';
    }
})


function coloriseOnlyClicked(listOfVariables, n) {
    for (let i = 0; i < listOfVariables.length ; i++){
        if (i != n){
            listOfVariables[i].setAttribute('state','not-active');
        }else{
            continue;
        }
    }
}


function toGetListState(list){
    const states = [];
    for (let i = 0 ; i < list.length ; i++){
        var curState= list[i].getAttribute('state');
        states.push(curState);
    }
    return states;
}