// find text areas
// limit text areas
// log limit. change as user types
$(function(){
   'use strict';

var maxLengthOne = 200;

$(".textAreaOne").keyup(function(){
   var lengthOne = $(this).val().length;
   var lengthOne = maxLengthOne - lengthOne;
   $(".labelForTextAreaOne").text(lengthOne + " Characters Left");
});

var maxLengthTwo = 100;

$(".textAreaTwo").keyup(function(){
   var lengthTwo = $(this).val().length;
   var lengthTwo = maxLengthTwo - lengthTwo;
   $(".labelForTextAreaTwo").text(lengthTwo + " Characters Left");
});

var maxLengthThree = 300;

$(".textAreaThree").keyup(function(){
   var lengthThree = $(this).val().length;
   var lengthThree = maxLengthThree - lengthThree;
   $(".labelForTextAreaThree").text(lengthThree + " Characters Left");
});

});
