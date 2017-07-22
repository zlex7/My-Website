
/*
    $("#home-nav").on("mouseover",function(){

      console.log("mouseover");

      $(this).parent().css({"bottom":"90%"});
      $(this).parent().css({"height":"10%"});
    }).on("mouseout",function(){

      console.log("mouseout");


      $(this).parent().css({"height":"130px"});
      console.log("setting height to 130px");
      $(this).parent().css({"bottom":"95%"});
    });

var height = $("#logo").height();

console.log("logo height: " + height);
$("#logo").css({"width":height+"px"});
*/
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function hamAnim(hamburger){

  hamburger.classList.toggle("change");

  if(hasClass(hamburger,"change")){

    document.getElementById("ham-menu").style.right="0px";

  }

  else{

      document.getElementById("ham-menu").style.right="-300px";

  }
}
