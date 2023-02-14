let selectedColor = 'green'

let redPalette = document.querySelector('#red')
redPalette.addEventListener('click', function(){
    selectedColor = 'red'

})

let painting = document.querySelector('.painting')
painting.addEventListener('click', function(e){
    console.log(e.target)
    e.target.style.backgroundColor = selectedColor
})