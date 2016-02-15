// 'use strict' throws errors when something goes pear-shaped. It should be included in the rest of  my code from here on out. As long as I'm using jQuery


$(function(){
   'use strict';

   // I have to 1: id the thing to be clicked upon
   // 2 click on the thing
   // 3 let the computer know what to do on click
   $(".activateModalButton").on("click", function() {
      $(".modalPopUp").css("display", "block");
   });
   $(".closeModalButton").on("click", function() {
      $(".modalPopUp").css("display", "none");
   });
   $(".modalContainer").on("click", function() {
      $(".modalPopUp").css("display", "none")
   });
});
