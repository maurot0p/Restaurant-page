import mapimg from './map.png'
import phoneimg from './phone.png'
import clockimg from './clock.png'


const loadContact = () => {
    const map = new Image();
    map.src = mapimg;
    map.setAttribute('class','symbolimg');
    const phone = new Image();
    phone.src = phoneimg;
    phone.setAttribute('class','symbolimg');
    const clock = new Image();
    clock.src = clockimg;
    clock.setAttribute('class','symbolimg');

    const container=document.querySelector('#content');
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contactcontainer');   

    const phonedescription = document.createElement('div');
    phonedescription.setAttribute('class', 'contactitems');   
    phonedescription.innerHTML="Phone: 123-456-9178";

    const locationdescription = document.createElement('div');
    locationdescription.setAttribute('class', 'contactitems');   
    locationdescription.innerHTML="Address: 123 street, FA";

    const clockdescription = document.createElement('div');
    clockdescription.setAttribute('class', 'contactitems');   
    clockdescription.innerHTML="Hours: Weekdays 11am-11pm";


    /*contact.appendChild(phone);
    contact.appendChild(map);
    contact.appendChild(clock);*/

    contact.appendChild(phonedescription);
    contact.appendChild(locationdescription);
    contact.appendChild(clockdescription);




    container.appendChild(contact);
}
const removeContact = () =>{
    const container=document.querySelector('#contactcontainer');
    container.remove();
}
export { loadContact,removeContact };