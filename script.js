// Animation du menu

const btn = document.querySelector('.btn');
const nav = document.querySelector('nav');
const illustration = document.querySelector('.illustration');
const texteIntro = document.querySelector('.texte-intro');


btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('visible');
    illustration.classList.toggle('hidden');
    texteIntro.classList.toggle('hidden');
})
// agrandissement des cartes de bière

const btnCartes = document.querySelectorAll('.btn-carte');
const cartes = document.querySelectorAll('.card');

btnCartes.forEach((btnCarte, index) => {
    btnCarte.addEventListener('click', () => {
        btnCarte.classList.toggle('active');
        cartes[index].querySelector('.infos').classList.toggle('visible');
        cartes[index].querySelector('.data').classList.toggle('visible');
        cartes[index].querySelector('.image-biere').classList.toggle('bigger');
        cartes[index].querySelector('.imgBx').classList.toggle('bigger');
        cartes[index].querySelector('.nom-biere').classList.toggle('hidden');
    });
});


// MON CODE !!!!! Animation du slider de la galerie

function generateSlideList(basePath, numElements) {
    const slideList = [];
  
    for (let i = 0; i < 0 + numElements; i++) {
      slideList.push(`${basePath}${i}.png`);
    }
  
    return slideList;
  }
  const slide1 = generateSlideList("photos/bieres/image", 11); // Génère une liste de 7 éléments
  const slide2 = generateSlideList("photos/fabrication/image", 18);
  const slide3 = generateSlideList("photos/divers/image", 7); // Génère une liste de 5 éléments
  
let numero = 0;

// Combining the slide1, slide2 and slide3 arrays
const combinedSlide = [...slide1, ...slide2, ...slide3];

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = combinedSlide.length - 1;
    if (numero > combinedSlide.length - 1)
        numero = 0;
    document.getElementById("slide").src = combinedSlide[numero];
}



