
const logInBtn = document.querySelector('.log-in');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const subBtn = document.querySelector('#submit-btn');
const passcode = document.querySelector('#passcode');
const form = document.querySelector('form');

const password = '1234';

logInBtn.addEventListener('click', ()=>{
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
    form.reset();
})

subBtn.addEventListener('click', ()=>{
    if(passcode.value === password){
        console.log("Pass!!");
        form.reset();
        window.location.href = "./source/protected.html";
    }
    else{
        alert('Wrong Code!!')
    }
})



