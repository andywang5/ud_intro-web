$(function () {
	$("#look_more").click(function () {
		$("html,body").animate({ scrollTop: $('#main').offset().top }, 800)
	});
});