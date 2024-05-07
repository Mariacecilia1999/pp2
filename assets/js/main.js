document.addEventListener("DOMContentLoaded", function() {
   const servicesSection = document.createElement("section");
   servicesSection.setAttribute("id", "servicios");

   const main = document.querySelector("main");
   main.appendChild(servicesSection);

   const servicesData = data.servicios;

   servicesData.forEach(service => {
       const serviceDiv = document.createElement("div");
       serviceDiv.classList.add("servicios");

       const serviceName = document.createElement("h2");
       serviceName.textContent = service.nombre;

       const serviceDescription = document.createElement("p");
       serviceDescription.textContent = service.descripcion;

       const serviceCost = document.createElement("p");
       serviceCost.textContent = "Costo: " + service.costo;

       serviceDiv.appendChild(serviceName);
       serviceDiv.appendChild(serviceDescription);
       serviceDiv.appendChild(serviceCost);

       servicesSection.appendChild(serviceDiv);
   });
});
