import {loadHTML} from './loadingpage';
import {loadMenu, removeMenu} from './menu';
import {loadContact} from './contact';
import {removeContact} from './contact';
import {loadHome} from './home';
import {removeHome} from './home';
import './style.css';

loadHTML();
makeTabs();


function makeTabs(){
  const tabContainer=document.createElement('div');
 tabContainer.setAttribute('id','tabcontainer');
 const container=document.querySelector('#content');

 const tabsSidebar=document.createElement('div');
 tabsSidebar.setAttribute('id','tabsSidebar');
 
 const homeTab=document.createElement('button');
 homeTab.setAttribute('class', 'tablinks tablinks--active');
 homeTab.setAttribute('id', 'hometab');

 homeTab.innerHTML="home";

 const menuTab=document.createElement('button');
 menuTab.setAttribute('class', 'tablinks tablinks--active');
 menuTab.setAttribute('id', 'menutab');

 menuTab.innerHTML="menu";


 const conctactTab=document.createElement('button');
 conctactTab.setAttribute('class', 'tablinks tablinks--active');
 conctactTab.setAttribute('id', 'contacttab');

 conctactTab.innerHTML="contact";

 
 tabsSidebar.appendChild(homeTab);
 tabsSidebar.appendChild(menuTab);
 tabsSidebar.appendChild(conctactTab);

 tabContainer.appendChild(tabsSidebar);
 container.appendChild(tabContainer);
}

 
function setupTabs(){
  document.querySelectorAll('.tablinks').forEach(button =>{
    button.addEventListener("click", () =>{
      if(button.id=="hometab"){
        if(document.querySelector('#menucontainer')!=null){
          removeMenu();
        }
        else if(document.querySelector('#contactcontainer')!=null){
          removeContact();
        }
        loadHome();
        button.classList.add("active");
        document.getElementById("menutab").classList.remove("active");
        document.getElementById("menutab").disabled=false;
        document.getElementById("contacttab").classList.remove("active");
        document.getElementById("contacttab").disabled=false;
        document.getElementById("hometab").disabled=true;
      }
      else if(button.id=="menutab"){
        if(document.querySelector('#homecontainer')!=null){
          removeHome();
        }
        else if(document.querySelector('#contactcontainer')!=null){
          removeContact();
        }
        loadMenu();
        button.classList.add("active");
        document.getElementById("hometab").classList.remove("active");
        document.getElementById("hometab").disabled=false;
        document.getElementById("contacttab").classList.remove("active");
        document.getElementById("contacttab").disabled=false;
        document.getElementById("menutab").disabled=true;
      }
      else{
        if(document.querySelector('#menucontainer')!=null){
          removeMenu();
        }
        else if(document.querySelector('#homecontainer')!=null){
          removeHome();
        }
        loadContact();
        button.classList.add("active");
        document.getElementById("menutab").classList.remove("active");
        document.getElementById("menutab").disabled=false;
        document.getElementById("hometab").classList.remove("active");
        document.getElementById("hometab").disabled=false;
        document.getElementById("contacttab").disabled=true;     
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  document.getElementById("hometab").click();
});
