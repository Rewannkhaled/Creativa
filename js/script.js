document.getElementById('btn-monthly').addEventListener('click', function() {
    document.getElementById('monthly-plans').classList.remove('hidden');
    document.getElementById('yearly-plans').classList.add('hidden');
    this.classList.add('btn-primary');
    this.classList.remove('btn-secondary');
    document.getElementById('btn-yearly').classList.remove('btn-primary');
    document.getElementById('btn-yearly').classList.add('btn-secondary');
});

document.getElementById('btn-yearly').addEventListener('click', function() {
    document.getElementById('yearly-plans').classList.remove('hidden');
    document.getElementById('monthly-plans').classList.add('hidden');
    this.classList.add('btn-primary');
    this.classList.remove('btn-secondary');
    document.getElementById('btn-monthly').classList.remove('btn-primary');
    document.getElementById('btn-monthly').classList.add('btn-secondary');
});


window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });

  document.querySelectorAll('.pagination a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

       
        document.querySelectorAll('.pagination a').forEach(link => link.classList.remove('active'));

        this.classList.add('active');

       
        const category = this.getAttribute('data-category');

        
        document.querySelectorAll('.image-group').forEach(group => {
            group.style.display = 'none';
        });

        
        const selectedGroup = document.querySelector(`.image-group[data-category="${category}"]`);
        if (selectedGroup) {
            selectedGroup.style.display = 'flex';
        }
    });
});

// Initially display all images
document.querySelector('.image-group[data-category="all"]').style.display = 'flex';



let counts = setInterval(updated);
  let upto = 1000;
  function updated() {
      let count1 = document.getElementById("counter1");
      count1.innerHTML = --upto;
      let count2 = document.getElementById("counter2");
      count2.innerHTML = --upto;
      let count3 = document.getElementById("counter3");
      count3.innerHTML = --upto;
      let count4 = document.getElementById("counter4");
      count4.innerHTML = --upto;
      if (upto === 0) {
          clearInterval(counts);
      }
  }