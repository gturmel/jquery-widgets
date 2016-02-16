$(function (){
   'use strict'
//this needs to: recognize when text is added
//add another box on the first keypress (.first?)
//remove a textbox that doesn't have anything in it AND loses focus
//never have 0 text boxes

var totalList = document.getElementsByClassName("totalList");

//this creates a box w each keypress
$(".totalList")
   .keypress(function(){
   $(".totalList").append("<li><input class = inputBox></input></li>");
});
//to delete an input box: .focusout, .detach

$(".totalList")
   .focusout(function(){
      $(".totalList").detach("<li><input class = inputBox></input></li>");
   });

//    This is my first attempt. I like .detach and .focusout, just getting them to talk...
// $(".totalList")
//       if (".inputBox".("")&&(".focusout"))
//       {
//          $(".totalList").detach("<li><input class = inputBox></input></li>");
//    }
});
