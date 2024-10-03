var typed = new Typed("#element", {
    strings: [
      "Python Developer",
      "Blog Writer",
      "&amp; a Content Creator.",
    ],
    typeSpeed: 70,
});

// Handle "Read More" Button Click
const containers = document.querySelectorAll('.experience-container');

containers.forEach(container => {
  container.querySelector('.read-more-btn').addEventListener('click', () => {
    const contentText = container.querySelector('.content-text');
    const moreText = container.querySelector('.more-text');
    container.classList.toggle('expanded');
    
    if (container.classList.contains('expanded')) {
      moreText.style.display = "inline";
      container.querySelector('.read-more-btn').textContent = 'Show less';
    } else {
      moreText.style.display = "none";
      container.querySelector('.read-more-btn').textContent = 'Read more...';
    }
  });
});


  