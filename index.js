let text = document.getElementById('text').innerHTML
console.log(text);

const text2 = document.getElementsByClassName('text2')
console.log(text2);

function handleClick (){
    for(let i = 0; i < text2.length; i++){
        text2[i].style.backgroundColor = 'darkgreen'
    }
}








document.querySelector('h1')

const queryText = document.querySelectorAll('.text2')

function handleClickQuery (){
    for(let i = 0; i < text2.length; i++){
        text2[i].style.color = 'deeppink'
    }
}

function handleMouseOut (){
        for(let i = 0; i < text2.length; i++){
            text2[i].style.color = ' black'
        }
}







function handleOnChange(val) {
  alert(`Ibs school ${val}`);

}

