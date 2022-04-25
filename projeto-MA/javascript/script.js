

//array para armazenar musicas
let musicas = [
    {titulo: '1406', artista: 'Mamonas Assassinas', src:'music/01. 1406.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Vira Vira', artista: 'Mamonas Assassinas', src:'music/02. Vira-Vira.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Pelados em Santos', artista: 'Mamonas Assassinas', src:'music/03. Pelados em Santos.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Chopis Centis', artista: 'Mamonas Assassinas', src:'music/04. Chopis Centis.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Jumento Celestino', artista: 'Mamonas Assassinas', src:'music/05. Jumento Celestino.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Sabão Crá-Crá', artista: 'Mamonas Assassinas', src:'music/06. Sabão Crá-Crá.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Uma Arlinda Mulher', artista: 'Mamonas Assassinas', src:'music/07. Uma Arlinda Mulher.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Cabeça de Bagre', artista: 'Mamonas Assassinas', src:'music/08. Cabeça de Bagre II.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Mundo Animal', artista: 'Mamonas Assassinas', src:'music/09. Mundo Animal.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Robocop Gay', artista: 'Mamonas Assassinas', src:'music/10. Robocop Gay.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Bois dont Cry', artista: 'Mamonas Assassinas', src:'music/11. Bois Don t Cry.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Débil Metal', artista: 'Mamonas Assassinas', src:'music/12. Débil Metal.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Sábado de Sol', artista: 'Mamonas Assassinas', src:'music/13. Sábado de Sol.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},
    {titulo: 'Lá Vem o Alemão', artista: 'Mamonas Assassinas', src:'music/14. Lá Vem O Alemão.mp3' , img: 'images/Mamonas Assassinas(1995).jpg'},


];




//selecionando a musica, o elemento é HTML
let musica = document.querySelector('audio');

//variavel para usar na função de troca de musicas com ARRAYS
let indexMusica = 0;


//variavel e função para obter o tempo certo da musica selecionada
let duracaoMusica = document.querySelector('.fim');
duracaoMusica.textContent = segundosMinutos(Math.floor(musica.duration));



let imagem = document.querySelector('.img')
let nomeMusica = document.querySelector('.descricao h2');
 let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);



//EVENTOS

//evento ao botao play, tem o ponto porque
//o elemento é classe CSS

//eventos de play e pause
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);




//eventos de proxima e musica anterior
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 12;
    }
    renderizarMusica(indexMusica);
    tocarMusica()
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 12){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    tocarMusica()
});

//função para troca de musicas
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src) //selecionando dentro do array
    //carregar proxima musica
    musica.addEventListener('loadeddata', () => { //arrow funcion = funçao anonima
        nomeMusica.textContent = musicas[index].titulo; //alternar nome da musica
        nomeArtista.textContent = musicas[index].artista //alternar nome do artista
        imagem.src = musicas[index].img; //alternar imagem
        duracaoMusica.textContent = segundosMinutos(Math.floor(musica.duration));

    } )
}





//verificar se a musica esta tocando
musica.addEventListener('timeupdate', atualizarBarra);


//criando as funçoes
function tocarMusica(){
    musica.play(); //tocar a musica
    document.querySelector('.botao-pause').style.display = 'block';
    //pausar a musica, porem esse botao fica escondido mudando a propriedade para BLOCK

    document.querySelector('.botao-play').style.display = 'none';
    //processo inverso para substituir o botao pause pelo pelo play e vice versa
    //propriedade fica em NONE

}

//processo inverso para pausar e esconder o botao play
function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';

    document.querySelector('.botao-play').style.display = 'block';
  
}

//selecionando a tag progress, barra de progresso do HTML
function atualizarBarra(){
    let barra = document.querySelector('progress')
    //estilizando o elemento, dividindo o tempo atual pela duração da musica
    //e multiplicando por 100 e concacetando em %
    barra.style.width = ((musica.currentTime / musica.duration) * 100) + '%';

    //tempo da musica
    let tempoDecorrido = document.querySelector('.inicio');
    //alterando o tempo conforme a musica
    tempoDecorrido.textContent = segundosMinutos(Math.floor(musica.currentTime));
}                           //Math.floor arrendonda


//funçao para formatar o tempo
function segundosMinutos(segundos){
    let campoMinuto = Math.floor(segundos / 60)
    let campoSegundo = segundos % 60;
    if(campoSegundo < 10){
        campoSegundo = '0' + campoSegundo
    }
    //retorna o tempo formatado
    return campoMinuto+ ':' +campoSegundo;
}








//NAVBAR

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();






//galley
  document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.gallery__stream');
    var items = document.querySelectorAll('.gallery__item');
    
    var prev = document.querySelector('.gallery__prev');
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.gallery__item');
    });
    
    var next = document.querySelector('.gallery__next');
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.gallery__item');
    });
  });
//galley





/*
//SLIDER

  let time = 1000, //duraçao
  currentImageIndex = 0, //arraylike
  images = document.querySelectorAll("#slider img") //selecionando todas as imagens
  max = images.length; 
  
  function nextImage(){
  
  //classlist ADD e REMOVE para adicionar e remover a classe
  //dessa forma as imagens vão e voltam do inicio
  //criando o efeito slide basicamente
  
  images[currentImageIndex].classList.remove("selected")//removendo classe
  
  
  currentImageIndex++ //adicionando imagem
  
  if(currentImageIndex >= max) //deifindo limite de imagens
  currentImageIndex = 0
  
  images[currentImageIndex].classList.add("selected")//adicionando classe
  }
  
  
  function start(){
  setInterval(() => {
    //troca de imagem
    nextImage()},time)
  }
  
  
  
  
  
  window.addEventListener("load", start)
*/



