$(document).ready (function () {  
    $('#contact-form').submit (function (e) {  
       e.preventDefault();  
       var first_name = $('#first_name').val();  
       var last_name = $('#last_name').val();  
       var email = $('#email').val();  
    var number = $('#number').val();  
     $(".error").remove();  
   if (first_name.length < 1) {  
         $('#first_name').after('<span class="error">This field is required</span>');  
       }  
   if (number.length < 1) {  
         $('#phone-no').after('<span class="error">This field is required</span>');  
       }  
       if (last_name.length < 1) {  
         $('#last_name').after('<span class="error">This field is required</span>');  
       }  
       if (email.length < 1) {  
         $('#email').after('<span class="error">This field is required</span>');  
       } else {  
         var regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;  
         var validEmail = regEx.test(email);  
         if (!validEmail) {  
           $('#email').after('<span class="error">Enter a valid email</span>');  

         }  
       }  
        
     });  
     
      
   });