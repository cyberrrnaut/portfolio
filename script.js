function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // Dark / light mode
  
  const btn = document.getElementById("modeToggle");
  const btn2 = document.getElementById("modeToggle2");
  const themeIcons = document.querySelectorAll(".icon");
  const currentTheme = localStorage.getItem("theme");
  
  if (currentTheme === "dark") {
    setDarkMode();
  }
  
  btn.addEventListener("click", function () {
    setTheme();
  });
  
  btn2.addEventListener("click", function () {
    setTheme();
  });
  
  function setTheme() {
    let currentTheme = document.body.getAttribute("theme");
  
    if (currentTheme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  }
  
  function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
  
    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-dark");
    });
  }
  
  function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");
  
    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-light");
    });
  }




  document.querySelector('.scrolling-text').addEventListener('click', function () {
    // Add the clicked class to trigger the animation
    this.classList.add('clicked');

    // Redirect after the animation duration (500ms in this case)
    setTimeout(function () {
        window.location.href = 'https://calendly.com/cyb3rnaut';
    }, 500); // This matches the fade-out duration
});


function openLinkInNewTab() {
  // Open the Calendly link in a new tab
  window.open('https://calendly.com/cyb3rnaut', '_blank');
}
