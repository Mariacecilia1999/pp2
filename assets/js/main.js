const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)


const showDataAbout = (data) =>{
    Object.entries(data).forEach(([key, value]) =>{
        if(key === 'experiencia'){
            $('#about').innerHTML += `<div class="about">
                                        <p>${value}</p>
                                        <img src="./assets/img/man-5806012_640.jpg" alt="Imagen de abogado firmando">
                                    </div>`
        }
    })   
    }



const showDataServices = (data) =>{
    for(const service in data){
        const dataObj = data[service]
        $('.servicesCard').innerHTML += `<div class='card'>
                                            <h3 class='titleCard'>${dataObj.nombre}<h3/>
                                            <div class='containerImg'>
                                                <img src= "./assets/img/equilibrar.png">
                                            </div>
                                            <div class='textsCard'>
                                                <p>${dataObj.descripcion}</p>
                                                <p class='cost'>${dataObj.costo}</p>
                                            </div>
                                        </div>`
        
    }
}

const showDataContact = (data) =>{
    console.log(data)
    Object.entries(data).forEach(([key, value]) =>{
        console.log(value)
        if(key == 'correo'){
            $('.contactData').innerHTML += `<div class='email'><h4>${key} ${value}</h4></div>`
        }else{
            $('.number').innerHTML += `<p>${key} ${value}</p>`
        }
    })
}


const  initializer = () =>{
    showDataAbout(data.fundador)
    showDataServices(data.servicios)
    showDataContact(data.contacto)
}


window.addEventListener('load', initializer)