// JavaScript Document

$(function () {

	//進場動畫--------------------------------------------------------------------------------------
	//記錄原CSS的初始位置
	var slogn_left = $('#slogn').position().left, slogn_top = $('#slogn').position().top;	
	var we5_Logo_left = $('#we5_Logo').position().left, we5_Logo_top = $('#we5_Logo').position().top;	
	var Menu_left = $('#mainMenu').position().left, Menu_top = $('#mainMenu').position().top;
	var Text02_left = $('#text02').position().left, Text02_top = $('#text02').position().top;


	//改變CSS初始位置
	$('#slogn').css({ left: slogn_left + 30, top: slogn_top - 0, opacity: 0 });
	$('#we5_Logo').css({ left: we5_Logo_left + 30, top: we5_Logo_top - 0, opacity: 0 });	
	$('#mainMenu').css({ left: Menu_left - 0, top: Menu_top - 20, opacity: 0 });
	$('#text02').css({ left: Text02_left - 0, top: Text02_top + 30, opacity: 0 });

	//動態	
	function start() {
		$('#slogn').delay(500).animate({ left: slogn_left, top: slogn_top, opacity: 1 },800);
		$('#we5_Logo').delay(1000).animate({ left: we5_Logo_left, top: we5_Logo_top, opacity: 1 },800);			
		$('#mainMenu').delay(800).animate({ left: Menu_left, top: Menu_top, opacity: 1 }, 800);
		$('#text02').delay(1000).animate({ left: Text02_left, top: Text02_top, opacity: 1 }, 800);
	}
	setTimeout(start, 100); //延遲time後執行該function一次




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
				'href': '/Action/10_We5/20170503L/list.html'
			});
			return false;
		});
	});

});