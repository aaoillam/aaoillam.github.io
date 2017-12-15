var x = 0;
var y = 0;
var z = 0;
var a = 0;
var b = 0;
var right = 0;
var rightspam = 0;
var righttimeout;
var bottom = document.getElementById("bottom");
var menus = document.getElementById("dropdownmenus");
var menu = document.getElementById("dropdownmenu");
bottom.style.top = "0px";

$("#first").addClass("enlarge");
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var dropdownmenus = scroll + $("#kits").height();
    console.log(scroll);
    $("#dropdownmenus").css("margin-top","0px");
    $('#blackOverlay').css('opacity',scroll/$('#blackOverlay').height());
    bottom.style.top = scroll + "px";
    menus.style.top = dropdownmenus + "px";
    $("#picture").css("z-index", 5);
    $("#picture2").css("z-index", 5);
    $("#photogallery").css("z-index", 5);
    if (scroll < 1){
      $("#picture").css("z-index", 20);
      $("#picture2").css("z-index", 20);
      $("#photogallery").css("z-index", 20);
    }
  });


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

function rightGallery(){
  if (rightspam == 1){
    alert("Stop pressing the button so quickly! Please wait for a second for it to work again.");
    right++;
    setTimeout(function(){
      right = 0;
    },
    1000);
  }
  rightspam = 1;
  if (right == 0){
    b++;
    if (b < 0){
      b = 9;
    }
    if (b > 9){
      b = 0;
    }
    if (b == 0){
      $("#picture").css("background-image", "url(b.jpg)");
      $("#first").addClass("enlarge");
      $("#tenth").removeClass("enlarge");
    }
    if (b == 1){
      $("#picture2").css("background-image", "url(b2.jpg)");
      $("#second").addClass("enlarge");
      $("#first").removeClass("enlarge");
    }
    if (b == 2){
      $("#picture").css("background-image", "url(b3.jpg)");
      $("#third").addClass("enlarge");
      $("#second").removeClass("enlarge");
    }
    if (b == 3){
      $("#picture2").css("background-image", "url(b4.jpg)");
      $("#fourth").addClass("enlarge");
      $("#third").removeClass("enlarge");
    }
    if (b == 4){
      $("#picture").css("background-image", "url(b5.jpg)");
      $("#fifth").addClass("enlarge");
      $("#fourth").removeClass("enlarge");
    }
    if (b == 5){
      $("#picture2").css("background-image", "url(b6.jpg)");
      $("#sixth").addClass("enlarge");
      $("#fifth").removeClass("enlarge");
    }
    if (b == 6){
      $("#picture").css("background-image", "url(b7.jpg)");
      $("#seventh").addClass("enlarge");
      $("#sixth").removeClass("enlarge");
    }
    if (b == 7){
      $("#picture2").css("background-image", "url(b8.jpg)");
      $("#eighth").addClass("enlarge");
      $("#seventh").removeClass("enlarge");
    }
    if (b == 8){
      $("#picture").css("background-image", "url(b9.jpg)");
      $("#nineth").addClass("enlarge");
      $("#eighth").removeClass("enlarge");
    }
    if (b == 9){
      $("#picture2").css("background-image", "url(b10.jpg)");
      $("#tenth").addClass("enlarge");
      $("#nineth").removeClass("enlarge");
    }
      if (z == 0){
        $("#picture2").removeClass("picture2");
        $("#picture").removeClass("right");
        $("#picture").removeClass("center");
        $("#picture").removeClass("left");
        $("#picture2").removeClass("center");
        $("#picture2").removeClass("left");
        $("#picture2").removeClass("right");
        $("#picture2").addClass("right");
        $("#picture").addClass("center-left");
        $("#picture2").removeClass("right");
        $("#picture2").addClass("right-center");
        setTimeout(function(){
          $("#picture").removeClass("center-left");
          $("#picture").addClass("left");
          $("#picture2").removeClass("right-center");
          $("#picture2").addClass("center");
          z = 1;
          a = 1;
        },
        500);
      }
      if (z == 1){
        $("#picture").removeClass("right");
        $("#picture").removeClass("center");
        $("#picture").removeClass("left");
        $("#picture2").removeClass("center");
        $("#picture2").removeClass("left");
        $("#picture2").removeClass("right");
        $("#picture2").addClass("center-left2");
        $("#picture").addClass("right-center2");
        setTimeout(function(){
          $("#picture").removeClass("right-center2");
          $("#picture").addClass("center2");
          $("#picture2").removeClass("center-left2");
          $("#picture2").addClass("left");
          z = 0;
          a = 0;
        },
        500);
      }
      console.log(b);
  }
  setTimeout(function(){
    rightspam = 0;
  },
  500);
}

function leftGallery(){
  if (rightspam == 1){
    alert("Stop pressing the button so quickly! Please wait for a second for it to work again.");
    right++;
    setTimeout(function(){
      right = 0;
    },
    1000);
  }
  rightspam = 1;
  if (right == 0){
    b--;
    if (b < 0){
      b = 9;
    }
    if (b > 9){
      b = 0;
    }
    if (b == 0){
      $("#picture").css("background-image", "url(b.jpg)");
      $("#first").addClass("enlarge");
      $("#tenth").removeClass("enlarge");
      $("#second").removeClass("enlarge");
    }
    if (b == 1){
      $("#picture2").css("background-image", "url(b2.jpg)");
      $("#second").addClass("enlarge");
      $("#first").removeClass("enlarge");
      $("#third").removeClass("enlarge");
    }
    if (b == 2){
      $("#picture").css("background-image", "url(b3.jpg)");
      $("#third").addClass("enlarge");
      $("#second").removeClass("enlarge");
      $("#fourth").removeClass("enlarge");
    }
    if (b == 3){
      $("#picture2").css("background-image", "url(b4.jpg)");
      $("#fourth").addClass("enlarge");
      $("#third").removeClass("enlarge");
      $("#fifth").removeClass("enlarge");
    }
    if (b == 4){
      $("#picture").css("background-image", "url(b5.jpg)");
      $("#fifth").addClass("enlarge");
      $("#fourth").removeClass("enlarge");
      $("#sixth").removeClass("enlarge");
    }
    if (b == 5){
      $("#picture2").css("background-image", "url(b6.jpg)");
      $("#sixth").addClass("enlarge");
      $("#fifth").removeClass("enlarge");
      $("#seventh").removeClass("enlarge");
    }
    if (b == 6){
      $("#picture").css("background-image", "url(b7.jpg)");
      $("#seventh").addClass("enlarge");
      $("#sixth").removeClass("enlarge");
      $("#eighth").removeClass("enlarge");
    }
    if (b == 7){
      $("#picture2").css("background-image", "url(b8.jpg)");
      $("#eighth").addClass("enlarge");
      $("#seventh").removeClass("enlarge");
      $("#nineth").removeClass("enlarge");
    }
    if (b == 8){
      $("#picture").css("background-image", "url(b9.jpg)");
      $("#nineth").addClass("enlarge");
      $("#eighth").removeClass("enlarge");
      $("#tenth").removeClass("enlarge");
    }
    if (b == 9){
      $("#picture2").css("background-image", "url(b10.jpg)");
      $("#tenth").addClass("enlarge");
      $("#nineth").removeClass("enlarge");
      $("#first").removeClass("enlarge");
    }
    if (a == 0){
      $("#picture2").removeClass("picture2");
      $("#picture").removeClass("right");
      $("#picture").removeClass("center");
      $("#picture").removeClass("left");
      $("#picture2").removeClass("center");
      $("#picture2").removeClass("left");
      $("#picture2").removeClass("right");
      $("#picture").addClass("center-right");
      $("#picture2").addClass("left-center");
      setTimeout(function(){
        $("#picture").removeClass("center-right");
        $("#picture").addClass("right");
        $("#picture2").removeClass("left-center");
        $("#picture2").addClass("center");
        a = 1;
        z = 1;
      },
      500);
    }
    if (a == 1){
      $("#picture").removeClass("right");
      $("#picture").removeClass("center");
      $("#picture").removeClass("left");
      $("#picture2").removeClass("center");
      $("#picture2").removeClass("left");
      $("#picture2").removeClass("right");
      $("#picture").addClass("left-center2");
      $("#picture2").addClass("center-right2");
      setTimeout(function(){
        $("#picture").removeClass("left-center2");
        $("#picture2").removeClass("center-right2");
        $("#picture").addClass("center2");
        $("#picture2").addClass("right");
        a = 0;
        z = 0;
      },
      500);
    }
    console.log(b);
  }
  setTimeout(function(){
  rightspam = 0;
  },
  500);
}


  function firstPicture(){
    if (b == 0){
      window.location.href = "../../y11 project/photo1/index.htm";
    }
    if (b == 2){
      window.location.href = "../../y11 project/photo3/index.htm";
    }
    if (b == 4){
      window.location.href = "../../y11 project/photo5/index.htm";
    }
    if (b == 6){
      window.location.href = "../../y11 project/photo7/index.htm";
    }
    if (b == 8){
      window.location.href = "../../y11 project/photo9/index.htm";
    }
  }

  function secondPicture(){
    if (b == 1){
      window.location.href = "../../y11 project/photo2/index.htm";
    }
    if (b == 3){
      window.location.href = "../../y11 project/photo4/index.htm";
    }
    if (b == 5){
      window.location.href = "../../y11 project/photo6/index.htm";
    }
    if (b == 7){
      window.location.href = "../../y11 project/photo8/index.htm";
    }
    if (b == 9){
      window.location.href = "../../y11 project/photo10/index.htm";
    }
  }
