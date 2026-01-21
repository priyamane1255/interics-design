// future animations or counters
// future advanced animation hooks
console.log("Hero animation loaded");

const sections = document.querySelectorAll('.reveal-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active'); 
        // 👆 isse animation reset hoga
      }
    });
  },
  {
    threshold: 0.3   // 30% section visible hone par trigger
  }
);

sections.forEach(section => {
  observer.observe(section);
});


const statsSection = document.querySelector('.stats-section');
const counters = document.querySelectorAll('.counter');

const runCounter = () => {
  counters.forEach(counter => {
    counter.innerText = '0';
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const update = () => {
      const inc = target / 80;
      if (count < target) {
        count += inc;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
};

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      statsSection.classList.add('active');
      runCounter();
    } else {
      statsSection.classList.remove('active'); // repeat animation
    }
  });
}, { threshold: 0.4 });

observer1.observe(statsSection);

const toggleBtn = document.getElementById('contactToggle');
const contactBox = document.getElementById('headerContact');

toggleBtn.addEventListener('click', () => {
  contactBox.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});