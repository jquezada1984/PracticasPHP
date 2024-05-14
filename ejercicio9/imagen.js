 const countDownDate = new Date().getTime() + 10 * 60 * 1000;

 const x = setInterval(function() {
     const now = new Date().getTime();
     const distance = countDownDate - now;
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     const countdownText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; 
     document.getElementById("countdown").textContent = countdownText;
     if (distance < 0) {
         clearInterval(x); 
         document.getElementById("countdown").textContent = "Tiempo Expirado";
     }
 }, 1000); 