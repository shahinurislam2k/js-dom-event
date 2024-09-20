
// option-1 add onclick function
// directly set on the HTML element 

// <button onclick="document.body.style.backgroundColor='Yellow' ">Make Yellow</button>



// option-2 add onclick function
function makeRed(){
    document.body.style.backgroundColor='red';
}



// option-3 add onclick function
const makeBlueButton = document.getElementById('make-blue');
        // console.log(makeBlueButton)
        makeBlueButton.onclick = makeBlue;
        
        function makeBlue(){
    document.body.style.backgroundColor='blue';
}



// option-3 add onclick function / another 
const makePurpleButton = document.getElementById('make-purple');
// console.log(makePurpleButton);
    makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';


}


// option-4 add onclick function
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink );

function makePink(){
 document.body.style.backgroundColor = 'pink';

}


// option-4 add onclick function / another 
const makeGreenButton = document.getElementById('make-green');
       console.log(makeGreenButton);

       makeGreenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';
       })


       
// option-4 Final
// document.getElementById('make-goldenrod').addEventListener('click', function(){})

 document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})
