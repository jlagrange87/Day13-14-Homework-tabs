$(document).ready(start);

function start(e){
	var $btn1 = $("#tab1");
	var $btn2 = $("#tab2");
	var $btn3 = $("#tab3");
	var $tabparent = $("#tab-parent");

	$btn1.click("#tab1", function(){ //targets the ID tabR and also removes the active class (and style because of the slide down) from the other ones.
		$(this).siblings('#tabR').slideDown(750).addClass('active').siblings().removeClass('active').removeAttr("style");
	});
    
    $btn2.click("#tab2", function(){ // same as above for tabG.
    	$(this).siblings('#tabG').slideDown(750).addClass('active').siblings().removeClass('active').removeAttr("style");
	});

	$btn3.click("#tab3", function(){ //same as above for tabB.
		$(this).siblings('#tabB').slideDown(750).addClass('active').siblings().removeClass('active').removeAttr("style");
	});
}