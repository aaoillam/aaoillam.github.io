var x = 0;
var y = 0;
var z = 0;
var a = 0;
var b = 0;
var right = 0;
var rightspam = 0;
var menus = document.getElementById("dropdownmenus");
var menu = document.getElementById("dropdownmenu");
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
if (isMobile = true){
  $("#media").value = "<link rel='stylesheet' media='only screen and (min-device-width:380px) and (max-device-width:679px)' type='text/css' href='largemobile.css'><link rel='stylesheet' media='only screen and (max-device-height:400px) and (max-device-width:1000px)' type='text/css' href='mobilesideways.css'><link rel='stylesheet' media='only screen and (max-device-width:379px)' type='text/css'  href='mobile.css'>"
}
  $(window).scroll(function (event) {
    // var scroll = $(window).scrollTop();
    // var dropdownmenus = scroll + $("#kits").height();
    // console.log(scroll);
    // $("#dropdownmenus").css("margin-top","0px");
    // bottom.style.top = scroll + "px";
    // menus.style.top = dropdownmenus + "px";
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
  window.location.href = "../../../index.htm";
}

function kitsOne(){
  window.location.href = "../../../kits1/index.htm";
}

function kitsTwo(){
  window.location.href = "../../../kits2/index.htm";
}

function kitsThree(){
  window.location.href = "../../../kits3/index.htm";
}

function kitsFour(){
  window.location.href = "../../../kits4/index.htm";
}

function kitsFive(){
  window.location.href = "../../../kits5/index.htm";
}

function oilsOne(){
  window.location.href = "../../../oils1/index.htm";
}

function oilsTwo(){
  window.location.href = "../../../oils2/index.htm";
}

function oilsThree(){
  window.location.href = "../../../oils3/index.htm";
}

function oilsFour(){
  window.location.href = "../../../oils4/index.htm";
}

function oilsFive(){
  window.location.href = "../../../oils5/index.htm";
}


function promotionsOne(){
  window.location.href = "../../../promotions1/index.htm";
}

function promotionsTwo(){
  window.location.href = "../../../promotions2/index.htm";
}

function promotionsThree(){
  window.location.href = "../../../promotions3/index.htm";
}

function promotionsFour(){
  window.location.href = "../../../promotions4/index.htm";
}

function promotionsFive(){
  window.location.href = "../../../promotions5/index.htm";
}


function accessoriesOne(){
  window.location.href = "../../../accessories1/index.htm";
}

function accessoriesTwo(){
  window.location.href = "../../../accessories2/index.htm";
}

function accessoriesThree(){
  window.location.href = "../../../accessories3/index.htm";
}

function accessoriesFour(){
  window.location.href = "../../../accessories4/index.htm";
}

function accessoriesFive(){
  window.location.href = "../../../accessories5/index.htm";
}

function otherOne(){
  window.location.href = "../../../others1/index.htm";
}

function otherTwo(){
  window.location.href = "../../../others2/index.htm";
}

function otherThree(){
  window.location.href = "../../../others3/index.htm";
}

function otherFour(){
  window.location.href = "../../../others4/index.htm";
}

function otherFive(){
  window.location.href = "../../../others5/index.htm";
}
