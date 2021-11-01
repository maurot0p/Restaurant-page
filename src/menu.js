const loadMenu = () => {
    const container=document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menucontainer');   

    const item1 = document.createElement('div');
    item1.setAttribute('class','menuitem');
    const item1title = document.createElement('div');
    item1title.setAttribute('class','itemtitle');
    item1title.innerHTML="Margherita";
    const item1description = document.createElement('div');
    item1description.setAttribute('class','itemdescription');
    item1description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item1.appendChild(item1title);
    item1.appendChild(item1description);

    const item2 = document.createElement('div');
    item2.setAttribute('class','menuitem');
    const item2title = document.createElement('div');
    item2title.setAttribute('class','itemtitle');
    item2title.innerHTML="Marinara";
    const item2description = document.createElement('div');
    item2description.setAttribute('class','itemdescription');
    item2description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item2.appendChild(item2title);
    item2.appendChild(item2description);

    const item3 = document.createElement('div');
    item3.setAttribute('class','menuitem');
    const item3title = document.createElement('div');
    item3title.setAttribute('class','itemtitle');
    item3title.innerHTML="Quattro Formaggi";
    const item3description = document.createElement('div');
    item3description.setAttribute('class','itemdescription');
    item3description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item3.appendChild(item3title);
    item3.appendChild(item3description);


    const item4 = document.createElement('div');
    item4.setAttribute('class','menuitem');
    const item4title = document.createElement('div');
    item4title.setAttribute('class','itemtitle');
    item4title.innerHTML="Capricciosa";
    const item4description = document.createElement('div');
    item4description.setAttribute('class','itemdescription');
    item4description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item4.appendChild(item4title);
    item4.appendChild(item4description);

    const item5 = document.createElement('div');
    item5.setAttribute('class','menuitem');
    const item5title = document.createElement('div');
    item5title.setAttribute('class','itemtitle');
    item5title.innerHTML="Diavola";
    const item5description = document.createElement('div');
    item5description.setAttribute('class','itemdescription');
    item5description.innerHTML=" San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil";
    item5.appendChild(item5title);
    item5.appendChild(item5description);

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);

    container.appendChild(menu);
}
const removeMenu = () =>{
    const menucontainer=document.querySelector('#menucontainer');
    menucontainer.remove();
}
export { loadMenu,removeMenu };