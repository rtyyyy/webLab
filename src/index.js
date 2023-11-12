
  ScrollTrigger.batch("section > div", {
    interval: 1,
    batchMax: 4,
    onEnterBack: (batch) =>
    gsap.to(batch, { autoAlpha: 1, stagger: 0.2, overwrite: true }),
  onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
    onEnter: (batch) =>
      gsap.to(batch, { autoAlpha: 1, stagger: 0.2, overwrite: false }),
    onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
   
  });
 
  document.querySelectorAll('.menu ul li ').forEach(item => {
    item.addEventListener('click', () => {
      item.querySelector('ul').style.display = item.querySelector('ul').style.display === 'block' ? 'none' : 'block';
    });
  });
  
  function moveMenu() {
    let menu = document.querySelector('.menu__item--main');
    menu.classList.toggle('shifted');
  }
  window.addEventListener('scroll', function() {
    let scrollImage = document.getElementById('mockup2');
    let imagePosition = scrollImage.getBoundingClientRect().top;
    let screenHeight = window.innerHeight * 0.5;
  
    if (imagePosition < screenHeight) {
      scrollImage.classList.add('scrolled');
    } else {
      scrollImage.classList.remove('scrolled');
    }
  });


