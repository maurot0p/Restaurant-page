import mauro from './italian.jpg'

const loadHome = () => {
    const mauricio = new Image();
    mauricio.src = mauro;
    const container2=document.createElement('div');
    const homecontainer=document.createElement('div');
    homecontainer.setAttribute('id','homecontainer');
    container2.setAttribute('id', 'chefimgcontainer');
    container2.appendChild(mauricio);
    const container=document.querySelector('#content');

    const description = document.createElement('div');
    description.setAttribute('id', 'description');   
    description.textContent="Order online or visit us!";  


    const description2 = document.createElement('div');
    description2.setAttribute('id', 'description');   
    description2.textContent="Best pizza in the DR!";  

    homecontainer.appendChild(description2);
    homecontainer.appendChild(container2);
    homecontainer.appendChild(description);


    container.appendChild(homecontainer);
}
const removeHome = () =>{
    const container=document.querySelector('#homecontainer');
    container.remove();
}
export { loadHome,removeHome };