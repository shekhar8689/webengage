document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("surveyForm"); 

     form.addEventListener("submit", function(event) {
        event.preventDefault();

         const email = document.getElementById("email").value;
         const mobileNumber = document.getElementById("mobileNumber").value;
         const countryCode = document.getElementById("countryCode").value;


         let Emailinput = document.getElementById('email');
         let Mobileinput = document.getElementById('mobileNumber');
         let EmailError = " You have entered an invalid email address";
         let MobileError = " You have entered an invalid Mobile number";
 
         if(!validateEmail(email))
         {
            Emailinput.value= EmailError;
            return;
         }

         if(!validateMobileNumber(mobileNumber))
         {
            Mobileinput.value= MobileError;
            return;
         }
         const queryParams = `?email=${encodeURIComponent(email)}&countryCode=${encodeURIComponent(countryCode)}&mobileNumber=${encodeURIComponent(mobileNumber)}`;
         window.location.href = `thankyou.html${queryParams}`;
     });
 });
 
 function validateEmail(email)
  {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
 ;
 }
 
 function validateMobileNumber(mobileNumber) 
 {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobileNumber);
 }
 