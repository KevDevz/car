window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  });
  
  window.addEventListener("beforeunload", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "block";
  });

  const scrollUpContainer = document.getElementById('scroll-up-container');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    scrollUpContainer.classList.add('active');
  } else {
    scrollUpContainer.classList.remove('active');
  }
});



  