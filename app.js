const togglebtn = document.querySelector(".menu_btn");
const linksContainer = document.querySelector(".links_container");
const links = document.querySelector(".links");
togglebtn.addEventListener("click",()=>{
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(linksContainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

const nav = document.getElementById("nav");
window.addEventListener("scroll",()=>{
    const navHeight = nav.getBoundingClientRect().height;
    if(window.pageYOffset > navHeight){
        nav.classList.add("fixed_nav");
    }else{
        nav.classList.remove("fixed_nav");
    }
});



const menuBtn = document.querySelector('.menu_btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});



const scrollLinks = document.querySelectorAll(".link");
scrollLinks.forEach(link =>{
    link.addEventListener("click",(e)=>{
    e.preventDefault();
    const navHeight = nav.getBoundingClientRect().height;
    const fixedNav = document.querySelector(".fixed_nav");
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - navHeight;
    if(linksContainerHeight > 100){
        position = position + linksContainerHeight;
    }
    if(!fixedNav){
        position = position;
    }
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
      } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
    window.scrollTo({
        top:position,
        left:0,
    });

        linksContainer.style.height = 0;
    })
});

const btn = document.querySelector(".button");
btn.addEventListener("click",()=>{
  nav.classList.remove("fixed_nav");
});




// const reviews = [
//     {id:1,
//     name:"John Doe",
//     job:"developer",
//     info:"this person is so amazing and her work is so admirable learn something from her",
//     },
//     {id:2,
//         name:"John Doe",
//         job:"developer",
//         info:"this person is so amazing and her work is so admirable learn something from her",
//     },
//     {id:3,
//         name:"Sara Doe",
//         job:"developer",
//         info:"this person is so amazing and her work is so admirable learn something from her",
//     },
//     {id:4,
//     name:"Elan Doe",
//         job:"developer",
//         info:"this person is so amazing and her work is so admirable learn something from her",
//     },
//     {id:5,
//         name:"Shawn Doe",
//         job:"developer",
//         info:"this person is so amazing and her work is so admirable learn something from her",
//     },
// ]

// const name = document.querySelector(".name");
// const job = document.querySelector(".job");
// const info = document.querySelector(".info");

// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const randomBtn = document.querySelector(".random");

// currentValue = 0;

// window.addEventListener("DOMContentLoaded",()=>{
//     showContent();
// })
// function showContent(){
//     const item = reviews[currentValue];
//     name.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.info;
// }
// prevBtn.addEventListener("click",()=>{
//     currentValue--
//     if(currentValue < 0){
//         currentValue = reviews.length - 1
//     }
//     showContent();
// })
// nextBtn.addEventListener("click",()=>{
//     currentValue++
//     if(currentValue > reviews.length){
//         currentValue = 0;
//     }
//     showContent();
// })
// randomBtn.addEventListener("click",()=>{
//     currentValue = Math.floor(Math.random() * reviews.length)
//     showContent();

// })