/* eslint-disable no-plusplus */
const projectArr = [
  {
    id: 0,
    title: 'Annual SuperCruise Festival',
    mobileImage: 'images/capital jazz.png',
    desktopImage: 'images/capital jazz.png',
    description:
      'A web/mobile app for a tech institute which offers different couses annually',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://github.com/Kidd254/Module1-Capstone-Project',
    source: 'https://kidd254.github.io/Module1-Capstone-Project/',
  },
  {
    id: 1,
    title: 'MyShop App',
    mobileImage: 'images/MyShop.png',
    desktopImage: 'images/MyShop.png',
    description:
      'My Shop app is an app where users can compare prices of items, add items to cart before checkout.',
    technologies: ['html', 'React', 'Tailwind CSS'],
    live: 'https://myshop-react-app.onrender.com/',
    source: 'https://github.com/Kidd254/MyShop_React_App',
  },
  {
    id: 2,
    title: 'Space Travellers Hub',
    mobileImage: 'images/space travellers hub.png',
    desktopImage: 'images/space travellers hub.png',
    description:
      'This Webapp is for a company that offers space travel services. Its built with React and Redux, using spaceX API to get the data.',
    technologies: ['html', 'css', 'react/redux'],
    live: 'https://space-travellers-hub-j6al.onrender.com',
    source: 'https://github.com/Kidd254/Space_Travellers_Hub',
  },
  {
    id: 3,
    title: 'Movies App',
    mobileImage: 'images/movies.PNG',
    desktopImage: 'images/movies.PNG',
    description:
      'This is a webapp that makes use of api to display a list of shows. A user can search, like and comment on their favorite shows.',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://hfg43.github.io/JS_Capstone/',
    source: 'https://github.com/Kidd254/JS_Capstone',
  },
  {
    id: 4,
    title: 'Math Magicians',
    mobileImage: 'images/math-mob.png',
    desktopImage: 'images/math-desk.png',
    description:
      'Math Magician is a project that uses a Single-Page Application format to display items on a page. A user can switch to a page where a live calculator which can be used for computation is.',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://lawrences-math-magicians-react-app-iy4q.onrender.com/',
    source: 'https://github.com/Kidd254/Math-Magicians-React-App',
  },
  {
    id: 5,
    title: 'Rick & Morty App',
    mobileImage: 'images/rick.png',
    desktopImage: 'images/rick.png',
    description:
      'Rick & Morty app is an app that is meant to display a list of characters, their residents and other details relevant to them. The app makes use of Rick & Morty API to retrieve relevant data for the app',
    technologies: ['react', 'tailwind css', 'javascript'],
    live: 'https://rick-and-morty-7d94.onrender.com/',
    source: 'https://github.com/Kidd254/Rick-Morty',
  },
  {
    id: 6,
    title: 'Metrics Web App',
    mobileImage: 'images/metrics.png',
    desktopImage: 'images/metrics.png',
    description:
      'The Metrics web app displays all countries when the page renders. A user can filter countries by continent name. A user can view details of each country by clicking any individual country.',
    technologies: ['html', 'react/redux', 'javascript'],
    live: 'https://metrics-webapp-4iuc.onrender.com/',
    source: 'https://github.com/Kidd254/Metrics-WebApp-React-Redux',
  },
  {
    id: 7,
    title: 'Budget App',
    mobileImage: 'images/budget-mob.png',
    desktopImage: 'images/budget-desk.png',
    description:
      'Budget App is a project created using Ruby on Rails for users to create bills. It can also allow users to create items under these bills with their corresponding amounts. It can be used to track the spending of an individual.',
    technologies: ['css', 'ruby', 'rails'],
    live: 'https://budget-2kt4.onrender.com/',
    source: 'https://github.com/Kidd254/Budget_App',
  },
  {
    id: 8,
    title: 'Recipe App',
    mobileImage: 'images/recipe-mob.png',
    desktopImage: 'images/recipe-desk.png',
    description:
      'Recipe App is a robust and user-friendly recipe application. Seamlessly create, discover, and share recipes with it. It offers a delightful cooking experience with its intuitive interface and extensive features.',
    technologies: ['css', 'ruby', 'rails'],
    live: 'https://mysite-uoec.onrender.com/',
    source: 'https://github.com/Kidd254/Recipe-app',
  },
  {
    id: 9,
    title: 'Annual SuperCruise Festival',
    mobileImage: 'images/capital jazz.png',
    desktopImage: 'images/capital jazz.png',
    description:
      'A web/mobile app for a tech institute which offers different couses annually',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://github.com/Kidd254/Module1-Capstone-Project',
    source: 'https://kidd254.github.io/Module1-Capstone-Project/',
  },
  {
    id: 10,
    title: 'MyShop App',
    mobileImage: 'images/MyShop.png',
    desktopImage: 'images/MyShop.png',
    description:
      'My Shop app is an app where users can compare prices of items, add items to cart before checkout.',
    technologies: ['html', 'React', 'Tailwind CSS'],
    live: 'https://myshop-react-app.onrender.com/',
    source: 'https://github.com/Kidd254/MyShop_React_App',
  },
];

const cards = document.querySelector('.cards');
const popup = document.querySelector('.popup');

let html = '';

projectArr.forEach((project) => {
  html += `
    <div class="card">
      <div class="project-card">
        <img src="${project.desktopImage}" alt="Project Image" class="card-image">        
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.description}</p>
        <div class="tech">
          <span>${project.technologies[0]}</span>
          <span>${project.technologies[1]}</span>
          <span>${project.technologies[2]}</span>
        </div>
        <button type="button" class="center card-button">See Project</button>
      </div>
    </div>
  `;
});

cards.innerHTML = html;

const projectButtons = document.querySelectorAll('.card-button');

for (let index = 0; index < projectButtons.length; index++) {
  projectButtons[index].addEventListener('click', () => {
    const title = popup.querySelector('.popup-title');
    const liveButton = popup.querySelector('.see-live');
    const sourceButton = popup.querySelector('.see-source');
    const popupContent = popup.querySelector('.popup-content');

    title.textContent = projectArr[index].title;
    if (window.innerWidth < 768) {
      popupContent.style.backgroundImage = `url('${projectArr[index].mobileImage}')`;
    } else {
      popupContent.style.backgroundImage = `url('${projectArr[index].desktopImage}')`;
    }

    liveButton.setAttribute('href', projectArr[index].live);
    sourceButton.setAttribute('href', projectArr[index].source);

    popup.classList.add('show');
    document.body.style.overflowY = 'hidden';
  });
}

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
  popup.classList.remove('show');
  document.body.style.overflowY = 'auto';
});
