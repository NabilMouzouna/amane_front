const menu = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")

menu.addEventListener('click',() => { navigation.classList.toggle('show-menu')})
 ///////////////////////////  TESTIMONIAL ///////////////////////////////////
 //////////////////////////   FAQ CONTAINER ////////////////////////
 const faq = document.querySelectorAll('#faq')
 faq.forEach(
    (question) => { question.addEventListener('click',() =>{question.classList.toggle('question-clicked')}) }
 )
 