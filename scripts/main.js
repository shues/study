function openMainMenu(){
  let mainMenu = document.querySelector('nav');
  let pointer = document.querySelector('.pointer');
  let menuButton = document.querySelector('.getMainMenuButton');
  mainMenu.style.display = 'block';
  pointer.className = "pointer up";
  menuButton.onclick = closeMainMenu;
}

function closeMainMenu(){
  let mainMenu = document.querySelector('nav');
  let pointer = document.querySelector('.pointer');
  let menuButton = document.querySelector('.getMainMenuButton');
  mainMenu.style.display = 'none';
  pointer.className = "pointer down";
  menuButton.onclick = openMainMenu;
}