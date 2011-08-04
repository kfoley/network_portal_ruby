$(document).ready(function() {
    $(function() {
        $("#portal-tabs").tabs();
	
	$("#gene-tabs").tabs();

	$("#function-tabs").tabs();

	$("#motif-tabs").tabs();

	$("#homology-tabs").tabs();

	$("#interaction-tabs").tabs();

	$("#network-tabs").tabs();

	$("#related-tabs").tabs();

	$("#gene-function-tabs").tabs();

    });

    addCollapsingDivListeners(true);

    function toggle_expand_all() {
        if ($('.expanded:first').is('.expanded')) {
            $('.expanded').removeClass('expanded');
    	}
    	else {
            $('.expanded').addClass('expanded');
    	}
     }
     $("#expandAll").bind('click', toggle_expand_all);


     $(".toggle_container").hide();
     $("span.expand_heading").toggle(function(){
         $(this).addClass("active");
         }, function () {
         $(this).removeClass("active");
     });
     $("span.expand_heading").click(function(){
         $(this).next(".toggle_container").slideToggle("slow");
     });
     $(".expand_all").toggle(function(){
         $(this).addClass("texpanded");
         }, function () {
         $(this).removeClass("texpanded");
     });
     $(".expand_all").click(function(){
         $(".toggle_container").slideToggle("slow");
     });

	
});
