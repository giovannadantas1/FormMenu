document.getElementById('leadform').addEventListener('submit',function(event){
event.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const socialMedia = document.getElementById('socialMedia').value;

//aqui vc pde adicionar a lógica para enviar no banco de dados

alert(`Nome: ${name}\nEmail: ${email}\nRede Social: ${socialMedia}`);

});