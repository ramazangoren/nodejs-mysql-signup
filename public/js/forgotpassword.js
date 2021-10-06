const contactForm = document.querySelector('.contact-form');
const email = document.getElementById('email')



contactForm.addEventListener('submit', (e)=>{

    e.preventDefault();
    console.log('its listening');

    let formData = {
        email: email.value,
      }
      
      let xhr = new XMLHttpRequest();
      xhr.open('POST', '/forgotpassword');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
          console.log(xhr.responseText);
          if (xhr.responseText == 'success') {
              email.value = '';
              alert('message sent successfully')
            } 
          else 
          {
              alert('something went wrong');
          }
      }
  
      xhr.send(JSON.stringify(formData));

})