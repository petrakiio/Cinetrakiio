const btn = document.getElementById('modo')
const body = document.body
const banner = document.getElementById('banner')

btn.addEventListener('click', () => {
   // Alterna a classe no body
   body.classList.toggle('modo-claro')
   
   if (body.classList.contains('modo-claro')){
    btn.textContent = 'Modo Escuro'
    banner.classList.add('claro')
   } else {
    btn.textContent = 'Modo Claro'
    banner.classList.remove('claro')
   }
})