

// Smooth scrolling for navbar links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const href = this.getAttribute("href");

        if (href === "#" || href === "") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Navbar background on scroll

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// Back to top button

const btn = document.createElement("button");

btn.innerHTML = "↑";

btn.id = "topBtn";

document.body.appendChild(btn);

btn.style.position = "fixed";
btn.style.right = "20px";
btn.style.bottom = "20px";
btn.style.width = "45px";
btn.style.height = "45px";
btn.style.borderRadius = "50%";
btn.style.border = "none";
btn.style.background = "#FFD700";
btn.style.color = "#000";
btn.style.fontSize = "22px";
btn.style.cursor = "pointer";
btn.style.display = "none";
btn.style.zIndex = "9999";

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }

});

btn.onclick = ()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// ================= Contact Form =================

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

if (form) {

    form.addEventListener("submit", async function(e){

        e.preventDefault();

        const data = new FormData(form);

        const response = await fetch("https://formspree.io/f/mjgqwljn", {

            method: "POST",
            body: data,
            headers: {
                "Accept": "application/json"
            }

        });

        if(response.ok){

            message.style.display = "block";
            form.reset();

            setTimeout(() => {
                message.style.display = "none";
            }, 5000);

        } else {

            alert("Something went wrong. Please try again.");

        }

    });

}
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const speed=30;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,40);

}else{

counter.innerText=target+"+";

}

}

update();

});
/* ===========================
   PRELOADER
=========================== */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(function () {

        preloader.classList.add("hide");

        setTimeout(function () {

            preloader.remove();

        }, 600);

    }, 2000); // 2 seconds

});