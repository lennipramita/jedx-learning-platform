feather.replace();


const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

if (hamburgerMenu) {
  hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle("active");
  };

  document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
}

const characters = [
  {
    name: "SpongeBob Tobangado",
    role: "Koki Krusty Krab",
    description: "Sahabat Patrick, dia juga bekerja di Krusty Crab, meskipun diperlakukan tidak baik, dia tidak punya pemikiran untuk slow living.",
    image: "assets/spongebob.jpeg",
    themeColor: "#f4d03f"
  },
  {
    name: "Squidward Tentacles",
    role: "Kasir & Seniman",
    description: "Dulu aku pikir dia Villainnya, namun ternyata sekrang aku sama seperti dia, intinya dia tsundere.",
    image: "assets/squidward.jpeg",
    themeColor: "#80e0d0" 
  },
  {
    name: "Sandy Cheeks",
    role: "Ilmuwan & Karateka",
    description: "Tupai perantau kayak aku, kita sama sama jenius yang tinggal di kota orang dan pemberani...piw piww.",
    image: "assets/sandy.jpeg",
    themeColor: "#e59866" //
  },
  {
    name: "Tuan Krab",
    role: "Pemilik Krusty Krab",
    description: "Bos SpongeBob yang sangat mencintai uang dan juga pelit, duh inimah saya yah.",
    image: "assets/mrkrabs.jpeg",
    themeColor: "#e74c3c" // 
  }
];

function displayCharacters() {
  const courseList = document.querySelector("#course-list");
  if (!courseList) return;

  courseList.innerHTML = "";

  characters.forEach((char) => {
    courseList.innerHTML += `
      <div class="character-card">
        <div class="card-image-wrapper">
          <img src="${char.image}" alt="${char.name}">
        </div>
        <div class="card-info" style="background-color: ${char.themeColor};">
          <h3>${char.name}</h3>
          <span class="role">${char.role}</span>
          <p>${char.description}</p>
        </div>
      </div>
    `;
  });
}

displayCharacters();