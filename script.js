// window.addEventListener("scroll", function(){
//   const navi = document.getElementById("main-nav");
//   if(window.scrollY > 90){
//     navi.classList.add("sticky");
//   }
// })

//animated text on header
const text = document.getElementById("text-change");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Frontend Developer";
  }, 0)

  setTimeout(() => {
    text.textContent = "Guest Blogger";
  }, 4000) //1s = 1000 milisecond

  setTimeout(() => {
    text.textContent = "Content Writer";
  }, 8000)
}

textLoad();
setInterval(textLoad, 12000);

//humbarger menu open and close
const menuOpen = document.getElementById('open-menu');
const navBar = document.getElementById('main-nav');
const navLinks1 = document.getElementById('nav-link-1');
const navLinks2 = document.getElementById('nav-link-2');
const navLinks3 = document.getElementById('nav-link-3');
const navLinks4 = document.getElementById('nav-link-4');
const navLinks5 = document.getElementById('nav-link-5');
const navLinks6 = document.getElementById('nav-link-6');

menuOpen.addEventListener('click', () => {
  menuOpen.classList.toggle('openmenu');
  navBar.classList.toggle('active');
});

function removeClick() {
  navBar.classList.remove('active');
  menuOpen.classList.remove('openmenu');
}

navLinks1.addEventListener('click', () => {
  removeClick();
});

navLinks2.addEventListener('click', () => {
  removeClick();
});

navLinks3.addEventListener('click', () => {
  removeClick();
});

navLinks4.addEventListener('click', () => {
  removeClick();
});

navLinks5.addEventListener('click', () => {
  removeClick();
});

navLinks6.addEventListener('click', () => {
  removeClick();
});

//contact form responsive
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
const url = 'https://script.google.com/macros/s/AKfycbwWI8CUe7uHygPKjQSqjNl8yh8iKuNNm6H05GAZgUV8dx-eBc0iGKwpKPIvpv_K6fWP/exec';

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Whatsapp number: ${number.value}<br> Email Subject: ${subject.value}<br> Message: ${mess.value}<br>`;

  Email.send({
    SecureToken: "e8b9d532-1595-425b-a0a8-e53cd5d58e7c",
    To: 'khayamthelinkbuilder@gmail.com',
    From: "khayamthelinkbuilder@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        swal({
          title: "Success!",
          text: "Message sent sucessfully!",
          icon: "success",
          button: "OK",
        });
      }
    }
  );
}

form.addEventListener("submit", (e) => {
  let d = new FormData(form);
  fetch(url, {
    method: "post",
    body: d
  }).then((res) => res.text()).then((finalData) => console.log(finalData));

  e.preventDefault();
  sendEmail();

  form.reset();
  return false;
});



// contextmenu hide from website looks like professional
document.addEventListener("contextmenu", (c)=>{
   c.preventDefault();
},false);

// swiper js slide service cards
const swiperCards = new Swiper(".sevices-inner", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  centerSlide: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      silderPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

//theme mode - light and dark theme
let lightMode = localStorage.getItem('lightMode');
const themeIcon = document.getElementById('theme-icon');
const header = document.getElementById('header');
const imageChange = document.getElementById('change-image');
const titles = document.getElementById('title');

const enableLightTheme = () => {
  document.body.classList.add('light-theme');
  themeIcon.src = 'Assets/moon.png';
  header.style.backgroundColor = 'rgba(255, 255, 255, 0.507)';
  imageChange.src = 'Assets/lightprofile.png';
  // titles.style.color = '#111827';
  localStorage.setItem('lightMode', 'enable');
}

const disableLightTheme = () => {
  document.body.classList.remove('light-theme');
  themeIcon.src = 'Assets/sun.png';
  header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  imageChange.src = 'Assets/darkprofile.png';
  // titles.style.color = '#f9fafb';
  localStorage.setItem('lightMode', 'disable');
}

if (lightMode === 'enable') {
  enableLightTheme();
}

themeIcon.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'enable') {
    enableLightTheme();
  } else {
    disableLightTheme();
  }

})

// education tabs for dekstop
const tabs = document.querySelectorAll('.title');
const eduBox = document.querySelectorAll('.education-box');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => { tab.classList.remove('active') });
    tab.classList.add('active');

    eduBox.forEach((content => { content.classList.remove('active') }));
    eduBox[index].classList.add('active');
  });
});

