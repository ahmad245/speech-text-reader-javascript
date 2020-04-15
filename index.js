

// SpeechSynthesis 
// Methods 
// 1 SpeechSynthesis.cancel() Removes all utterances from the utterance queue.
// 2 speechSynthesis.getVoices() Returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device.
// 3 speechSynthesis.pause() Puts the SpeechSynthesis object into a paused state.
// 4 speechSynthesis.resume() Puts the SpeechSynthesis object into a non-paused state: resumes it if it was already paused.
// 5 speechSynthesis.speak() Adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.

// Events
// voiceschanged

let container=document.getElementById('container');
let voice=document.getElementById('voice');
let text=document.getElementById('text');
let read=document.getElementById('read');

M.AutoInit();
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});

const data = [
    {
      image: './img/drink.jpg',
      text: "I'm Thirsty"
    },
    {
      image: './img/food.jpg',
      text: "I'm Hungry"
    },
    {
      image: './img/tired.jpg',
      text: "I'm Tired"
    },
    {
      image: './img/hurt.jpg',
      text: "I'm Hurt"
    },
    {
      image: './img/happy.jpg',
      text: "I'm Happy"
    },
    {
      image: './img/angry.jpg',
      text: "I'm Angry"
    },
    {
      image: './img/sad.jpg',
      text: "I'm Sad"
    },
    {
      image: './img/scared.jpg',
      text: "I'm Scared"
    },
    {
      image: './img/outside.jpg',
      text: 'I Want To Go Outside'
    },
    {
      image: './img/home.jpg',
      text: 'I Want To Go Home'
    },
    {
      image: './img/school.jpg',
      text: 'I Want To Go To School'
    },
    {
      image: './img/grandma.jpg',
      text: 'I Want To Go To Grandmas'
    }
  ];
  
// init message for speech
  const message=new SpeechSynthesisUtterance();

  const setMessage=(text)=>{
    message.text=text;
  }
const speechText=()=>{
  speechSynthesis.speak(message);
}

const createBox=(el)=>{
    let box=document.createElement('div');

    box.innerHTML= `
    <div class="col s12 m3">
    <div class="card  ">
      <div class="card-image">
        <img src=${el.image} class="img">
      </div>
     
      <div class="card-action">
          <p>${el.text}</p>
      </div>
    </div>
  </div>
    `;
    
    
    box.addEventListener('click',()=>{
      box.querySelector('.card').classList.add('active');
      setTimeout(() => {
        box.querySelector('.card').classList.remove('active')
      }, 1000);
      
      setMessage(el.text);
      speechText();
    });
    container.appendChild(box);

}


  data.forEach(createBox);
let voices=[];
  const getVoices=()=>{
     voices=speechSynthesis.getVoices();
     
      
      voices.forEach((el)=>{
          const option=document.createElement('option');
          option.value=el.name;
          option.innerText=`${el.name} ${el.lang}`;
          console.log(option);
          voice.appendChild(option);
      })
  }
// Set voice
// function setVoice(e) {
//   message.voice = voices.find(voice => voice.name === e.target.value);
// }
  // Voices changed
 speechSynthesis.addEventListener('onvoiceschanged', getVoices);
// voice.addEventListener('change', setVoice);
// wait on voices to be loaded before fetching list
getVoices();

