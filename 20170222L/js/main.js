// JavaScript Document

$(function () {

	//進場動畫--------------------------------------------------------------------------------------
	//記錄原CSS的初始位置
	var we5_Logo_left = $('#we5_Logo').position().left, we5_Logo_top = $('#we5_Logo').position().top;	
	//var name_left = $('#name').position().left, name_top = $('#name').position().top;
	var Menu_left = $('#mainMenu').position().left, Menu_top = $('#mainMenu').position().top;
	var Text01_left = $('#text01').position().left, Text01_top = $('#text01').position().top;
	var Text02_left = $('#directions').position().left, Text02_top = $('#directions').position().top;


	//改變CSS初始位置
	$('#we5_Logo').css({ left: we5_Logo_left + 30, top: we5_Logo_top - 0, opacity: 0 });
	//$('#name').css({ left: name_left + 0, top: name_top - 30, opacity: 0 });
	$('#mainMenu').css({ left: Menu_left - 30, top: Menu_top - 0, opacity: 0 });
	$('#text01').css({ left: Text01_left + 0, top: Text01_top - 30, opacity: 0 });
	$('#directions').css({ left: Text02_left - 0, top: Text02_top - 30, opacity: 0 });

	//動態	
	function start() {
		$('#we5_Logo').delay(300).animate({ left: we5_Logo_left, top: we5_Logo_top, opacity: 1 },800);
		//$('#name').delay(1200).animate({ left: name_left, top: name_top, opacity: 1 },500);			
		$('#mainMenu').delay(200).animate({ left: Menu_left, top: Menu_top, opacity: 1 }, 1000);
		$('#text01').delay(600).animate({ left: Text01_left, top: Text01_top, opacity: 1 }, 800);
		$('#directions').delay(600).animate({ left: Text02_left, top: Text02_top, opacity: 1 }, 800);
	}
	setTimeout(start, 0); //延遲time後執行該function一次




//lightBox//
	$(document).ready(function () {
		$('#list').click(function () {
			$.fancybox({
				'width': 520,
				'height': 550,
				'autoScale': false,
				'transitionIn': 'elastic',
				'transitionOut': 'fade',
				'overlayColor': '#000',
				'overlayOpacity': 0.5 ,
				'type': 'iframe',
				'href': '/Action/10_We5/20170222L/list.html'
			});
			return false;
		});
	});

});