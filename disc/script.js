const body = document.querySelector('body');

const gmail = document.querySelector('#gmail');
const github = document.querySelector('#github');
const skype = document.querySelector('#skype');
const linkedin = document.querySelector('#linkedin');
const youtube = document.querySelector('#youtube');


gmail.addEventListener('click', () => {
    alert('Gmail ID:        jayantaojha686@gmail.com');
})


github.addEventListener('click', () => {
    window.open('https://github.com/Jayantaojha', '_blank');
})


skype.addEventListener('click', () => {
    alert('Skype Email Id:      jayanta.ojha@outlook.com');
})


linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/jayanta-ojha-21096520b/', '_blank');
})


youtube.addEventListener('click', () => {
    window.open('https://www.youtube.com/@dev.daily_code/featured', '_blank');
})