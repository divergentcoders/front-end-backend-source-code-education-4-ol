$(".navTrigger").click(function() {
 $(this).toggleClass("active");
 console.log("Clicked menu");
 $("#mainListDiv").toggleClass("show_list");
 $("#mainListDiv").fadeIn();
});

do save it with extension .js
