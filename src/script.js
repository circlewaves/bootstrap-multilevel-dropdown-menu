(function ( $ ) {
	"use strict";

	$(function () {

$('ul.dropdown-menu a').on('click', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault(); 
    // Avoid having the menu to close when clicking
    event.stopPropagation(); 
	
		// find parent element (<li> tag)
		var cur_nav_element=$(this).parent();
    // Re-add .open to parent sub-menu item
    //$(this).parent().addClass('open');
    //$(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
	
	cur_nav_element.parent().find('li.dropdown').not($(this).parent()).removeClass('open');
	cur_nav_element.toggleClass('open');

});
	
$('ul.navbar-nav a.dropdown-toggle').on('click', function(event) {	
		// find parent element (<li> tag)
		var cur_nav_element=$(this).parent();
		cur_nav_element.parent().find('li.dropdown').not($(this).parent()).removeClass('open');


});	

	});

}(jQuery));