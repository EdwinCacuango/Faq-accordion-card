let btnQuestions=document.querySelectorAll('.btn-question');

console.log(btnQuestions);


btnQuestions.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        btn.classList.toggle('open');
        btn.nextElementSibling.classList.toggle('open-answer');
    })
    
});