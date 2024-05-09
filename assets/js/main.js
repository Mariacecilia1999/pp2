const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)


const showDataAbout = (data) =>{
    console.log(data)

    Object.entries(data).forEach(([key, value]) =>{
        console.log(data)
        if(key === 'experiencia'){
            console.log(value)
            $('#about').innerHTML += `<div class="about">
                                        <p>${value}</p>
                                        <img src="./assets/img/man-5806012_640.jpg" alt="Imagen de abogado firmando">
                                    </div>`
        }
       

    })   
    }






const  initializer = () =>{
    showDataAbout(data.fundador)
}


window.addEventListener('load', initializer)