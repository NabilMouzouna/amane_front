const menu = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")

menu.addEventListener('click',() => { navigation.classList.toggle('show-menu')})
 ///////////////////////////  TESTIMONIAL ///////////////////////////////////
 //////////////////////////   FAQ CONTAINER ////////////////////////
 const faq = document.querySelectorAll('#faq')
 faq.forEach(
    (question) => { question.addEventListener('click',() =>{question.classList.toggle('question-clicked')}) }
 )
 /////////////////////////// preventing questionnaire default behavoir
 ///////////////////////////// one choice answer //////////////////
 const sgAnswers = document.querySelectorAll('#sg-choice')
 sgAnswers.forEach(
   (answer) => { answer.addEventListener('click',() => { 
      for(let ans of sgAnswers) {
        ans.classList.remove('btn-active')
      }
      answer.classList.add('btn-active')
     })
}

 )
 ///////////////////////////// one choice answer //////////////////
const mltAnswersLabel = document.querySelectorAll('#multi-choice label')
const mltAnswers = document.querySelectorAll('#multi-choice')
for(let i=0;i<mltAnswersLabel.length;i++){
  mltAnswersLabel[i].addEventListener('click',() => { 
    mltAnswers[i].classList.toggle('btn-active')
   })
}

////////////////////// NExt and previous button ////////////////////////
const nextBtn = document.querySelector("#next")
const previousBtn = document.querySelector("#previous")
const formOne = document.querySelector('#form-one')
const formTwo = document.querySelector('#form-two')
nextBtn.addEventListener('click',(e) => { 
  e.preventDefault();
  formOne.classList.add('hide')
  formTwo.classList.remove('hide')
  previousBtn.classList.remove('hide')
  nextBtn.innerText = 'Commancer'
})
previousBtn.addEventListener('click',(e) => { 
  e.preventDefault();
  formOne.classList.remove('hide')
  formTwo.classList.add('hide')
  previousBtn.classList.add('hide')
  nextBtn.innerText = 'suivant'
 })