



document.querySelector('.hamburger-menu').
addEventListener("click",()=>{
  document.querySelector('.container').classList.toggle
  ('change');  
})

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });



//   ........... form


    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()

        setTimeout(function() {
            const msg = document.getElementById("status");
            msg.style.transition = '5s';
            msg.style.opacity = '0';
            msg.style.visibility = 'hidden';
            msg.style.display = 'none';
           
        }, 4000);

      }).catch(error => {
        status.classList.add('.error');

        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)




