var x = 0;
var y = 0;
var z = 0;
var a = 0;
var b = 0;
var right = 0;
var rightspam = 0;
var menus = document.getElementById("dropdownmenus");
var menu = document.getElementById("dropdownmenu");
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var dropdownmenus = scroll + $("#kits").height();
    console.log(scroll);
    $("#dropdownmenus").css("margin-top","0px");
    bottom.style.top = scroll + "px";
    menus.style.top = dropdownmenus + "px";
  });

function kits(){
  $("#dropdownkits").toggleClass("show");
  $("#dropdownkits").toggleClass("hide");
  $("#dropdownkits").toggleClass("dropdowncontent");
  $("#kits").toggleClass("click");
}

function oils(){
  $("#dropdownoils").toggleClass("show");
  $("#dropdownoils").toggleClass("hide");
  $("#dropdownoils").toggleClass("dropdowncontent");
  $("#oils").toggleClass("click");
}

function accessories(){
  $("#dropdownaccessories").toggleClass("show");
  $("#dropdownaccessories").toggleClass("hide");
  $("#dropdownaccessories").toggleClass("dropdowncontent");
  $("#accessories").toggleClass("click");
}

function promotions(){
  $("#dropdownpromotions").toggleClass("show");
  $("#dropdownpromotions").toggleClass("hide");
  $("#dropdownpromotions").toggleClass("dropdowncontent");
  $("#promotions").toggleClass("click");
}

function other(){
  $("#dropdownother").toggleClass("show");
  $("#dropdownother").toggleClass("hide");
  $("#dropdownother").toggleClass("dropdowncontent");
  $("#other").toggleClass("click");
}

function backToMenu(){
  window.location.href = "../../y11 project/index.htm";
}

function kitsOne(){
  window.location.href = "../../y11 project/kits1/index.htm";
}

function kitsTwo(){
  window.location.href = "../../y11 project/kits2/index.htm";
}

function kitsThree(){
  window.location.href = "../../y11 project/kits3/index.htm";
}

function kitsFour(){
  window.location.href = "../../y11 project/kits4/index.htm";
}

function kitsFive(){
  window.location.href = "../../y11 project/kits5/index.htm";
}

function oilsOne(){
  window.location.href = "../../y11 project/oils1/index.htm";
}

function oilsTwo(){
  window.location.href = "../../y11 project/oils2/index.htm";
}

function oilsThree(){
  window.location.href = "../../y11 project/oils3/index.htm";
}

function oilsFour(){
  window.location.href = "../../y11 project/oils4/index.htm";
}

function oilsFive(){
  window.location.href = "../../y11 project/oils5/index.htm";
}


function promotionsOne(){
  window.location.href = "../../y11 project/promotions1/index.htm";
}

function promotionsTwo(){
  window.location.href = "../../y11 project/promotions2/index.htm";
}

function promotionsThree(){
  window.location.href = "../../y11 project/promotions3/index.htm";
}

function promotionsFour(){
  window.location.href = "../../y11 project/promotions4/index.htm";
}

function promotionsFive(){
  window.location.href = "../../y11 project/promotions5/index.htm";
}


function accessoriesOne(){
  window.location.href = "../../y11 project/accessories1/index.htm";
}

function accessoriesTwo(){
  window.location.href = "../../y11 project/accessories2/index.htm";
}

function accessoriesThree(){
  window.location.href = "../../y11 project/accessories3/index.htm";
}

function accessoriesFour(){
  window.location.href = "../../y11 project/accessories4/index.htm";
}

function accessoriesFive(){
  window.location.href = "../../y11 project/accessories5/index.htm";
}

function otherOne(){
  window.location.href = "../../y11 project/others1/index.htm";
}

function otherTwo(){
  window.location.href = "../../y11 project/others2/index.htm";
}

function otherThree(){
  window.location.href = "../../y11 project/others3/index.htm";
}

function otherFour(){
  window.location.href = "../../y11 project/others4/index.htm";
}

function otherFive(){
  window.location.href = "../../y11 project/others5/index.htm";
}
