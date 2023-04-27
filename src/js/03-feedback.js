import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-message';

const refs = {
    form: document.querySelector(".feedback-form"),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt){
evt.preventDefault();

const {email, message} = refs.form.elements;
    if (!email.value || !message.value) {
       alert('Будь ласка, заповніть всі поля');
       return
    }
    const data = localStorage.getItem(STORAGE_KEY)
    console.log("data:" , data)

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    // const formData = {
    //     email: email.value,
    //     message: message.value
    // }; 
    // console.log(formData);
}

function onTextareaInput(evt){

const {email, message} = refs.form.elements
localStorage.setItem(STORAGE_KEY, JSON.stringify({email:email.value, message:message.value}))
}

function populateTextarea(){
    const savedObject = JSON.parse(localStorage.getItem(STORAGE_KEY))
   
    if(savedObject){
        const {email, message} = refs.form.elements;
       email.value = savedObject.email
       message.value = savedObject.message
    }
}