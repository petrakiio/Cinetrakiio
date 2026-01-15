const btn = document.getElementById('modo')
const body = document.body

btn.addEventListener('click', () =>{
   //Criando uma classe pro body
   body.classList.toggle('modo-claro')
   if (body.classList.contains('modo-claro')){
    btn.textContent='Modo Escuro'
   }else{
    btn.textContent='Modo Claro'
   }
})