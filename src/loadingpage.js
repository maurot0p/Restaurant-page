import pizza from './pizza.jpg';
import mauro from './italian.jpg'
import './style.css';

const loadHTML = () => {
    const container=document.createElement('div');
    container.setAttribute('id', 'content');
    const title = document.createElement('div');
    title.setAttribute('id', 'title');         
    title.textContent="Mauro's Pizzeria";   
    const pizzeria = new Image();
    pizzeria.src = pizza;
    container.appendChild(title);
    document.body.appendChild(container);    
    
            
}
export { loadHTML };