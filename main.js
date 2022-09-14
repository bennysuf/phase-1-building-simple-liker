// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  clickListener()
})



function clickListener() { 
  document.addEventListener('click',(e)=> {
 if (e.target.classList[0]=== 'like-glyph') { //checks if what i click is the heart

  mimicServerCall()
  .then((data) => {
    const activated = e.target.classList.contains('activated-heart'); //to check if it constains the class of activated-heart
    if (activated) {
      e.target.classList.remove('activated-heart'); //removes the class that give it red color
      e.target.innerHTML = EMPTY_HEART
      
    } else {
      e.target.classList.add('activated-heart');
      e.target.innerHTML = FULL_HEART
      
    }
  })
  .catch((error) => {
    return document.querySelector('#modal').classList.remove('hidden'), //removes the hidden class allowing the error to show
    console.log('Error', error),
    setTimeout(() => {
      console.log('return error')
      return document.getElementById('modal').className = 'hidden'; //adds the hidden class atfer a few seconds to remove error message
    }, 3000)  
  })
 
 }
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
