const emailInput = document.getElementById('email-input');
const form = document.getElementById('myForm')

 form.addEventListener('submit', ($event)=>{
    $event.preventDefault();

   // form.reset();
    checkForm();
 });


 function checkForm() {
  const containerOne = document.getElementById('error-one-div');

  const containerTwo = document.getElementById('error-two-div');
  const errorImg = document.getElementById('image-one');
  let email = emailInput.value;

    if (!email){
     
        containerOne.style.display = "block"
        containerTwo.style.display = "none"
        errorImg.style.display = "inline"
        emailInput.style.border = "thin solid hsl(0, 93%, 68%)" 
    }
    else if(!validEmail(email)){
      containerTwo.style.display = "block"
      containerOne.style.display = "none"
      errorImg.style.display = "inline"
      emailInput.style.border = "thin solid hsl(0, 93%, 68%)";
    }
    else {
        containerOne.style.display = "none";
        containerTwo.style.display = "none"
    }
 }    


 function validEmail (email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }