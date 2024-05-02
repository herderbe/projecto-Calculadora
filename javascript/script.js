let borrar = document.getElementById('borrar')
let pantalla = document.querySelector('.pantalla')
let botones = document.querySelectorAll('.btn')
let sol = document.getElementById('sol')
let luna = document.getElementById('luna')
let body = document.getElementById('body')

sol.addEventListener('click',function(){
    body.style.backgroundColor = '#d9d7d7'
    sol.style.color = '#000'
    luna.style.color = '#000'
})
luna.addEventListener('click',function(){
    body.style.backgroundColor = '#090c31'
    sol.style.color = '#fff'
    luna.style.color = '#fff'
})

botones.forEach(boton =>{
    boton.addEventListener('click',function(){
        if (boton.id === 'c'){
            pantalla.textContent = '0'
            return
        }
        if(boton.id === 'borrar'){
            if(pantalla.textContent.length === 1){
                pantalla.textContent = '0'
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            }
            return
             
        }
        if(boton.id === 'igual'){
            try{
                pantalla.textContent = eval(pantalla.textContent)
            }catch{
                pantalla.textContent = '0'
            }
            return
        }

        if(pantalla.textContent === '0'){
            pantalla.textContent = boton.textContent 
        }else{
            pantalla.textContent += boton.textContent
        }

        
        
    })
})
