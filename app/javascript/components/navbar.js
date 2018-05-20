export function ChangeColorMenuHome() {
  const menu = document.querySelector('.home-navbar');
  const banner = document.querySelector('.banner');
  const textMenu = document.querySelector('.navbar-link-home');
  document.addEventListener('scroll', (event) => {
    if (window.scrollY > (window.innerHeight * 0.6)) {
      menu.style.position = 'fixed';
      menu.style.top = '0';
      menu.style.backgroundColor = "white";
      textMenu.style.color = 'rgb(100,100,100)';
    } else{
      menu.style.position = 'absolute';
      menu.style.backgroundColor = "transparent";
      textMenu.style.color = 'white';
    }
  });
}
