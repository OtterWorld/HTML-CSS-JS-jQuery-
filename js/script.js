
document.querySelector('.back').onclick = menuHide;
document.querySelector('.burger').onclick = menuShow;

document.onkeydown = function(event) {
	if(event.code == 'KeyM') menuShow();
	if(event.code == 'Escape') menuHide();
}

function menuShow() {
	document.querySelector(".menu").style.right = 0;
}
function menuHide() {
	document.querySelector(".menu").style.right = '-260px';
}



$(".mob li").click(function(){
	$(".li").removeClass("selected");
	$(this).addClass('selected');
})


$(".slide").click(function(e){
	var linkHref = $(this).attr("href");
    $("html, body").animate({
    	scrollTop: $(linkHref).offset().top
    }, 1000);
	e.preventDefault();
})


$("#toTop").click(function(e){
	var toTop = $(this).attr("href")
	$("html, body").animate({
		scrollTop: $(toTop).offset().top
	}, 1000);
})


$("#teamRight").click(function(e){
	$("#picSlider").attr("src", )
   
})

$(".hex_sub").mouseover(function(){
	$(this).children(".show").hide();
	$(this).children(".hide").show();

});

$(".hex_sub").mouseout(function(){
	$(this).children(".show").show();
	$(this).children(".hide").hide();

});


$(".highlighterScroll").hide();
$(".optiSRED").hide();
$(".scrollItem").click(function(e){
    var image = $(this).children(".imgScrollItem").children(".optiSRED").attr("src");
    var text = $(this).attr("alt");
    
    $('#focusOptiS').attr('src', image);
    $('#screenDescr').html(text);

   $(".highlighterScroll").hide();
   $(this).children(".highlighterScroll").toggle(); 
   $(this).children(".imgScrollItem").addClass("selecte");
   $(this).addClass("selecte");
   $(this).children(".imgScrollItem").children(".optiSRED").toggle();
   $(this).children(".imgScrollItem").children(".optiS").toggle();
 

   if ($('.selecte').not(this).hasClass("selecte")) {
   $('.selecte').not(this).children(".imgScrollItem").children(".optiSRED").hide();  
   $('.selecte').not(this).children(".imgScrollItem").children(".optiS").show()    
   }

   $('.selecte').not(this).removeClass("selecte")

   
});



   
   


