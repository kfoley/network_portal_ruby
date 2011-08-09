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


    // from http://www.snilesh.com/resources/jquery/jquery-expand-collapse-expand-all-collapse-all/
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
        $(this).text("Collapse all");
        $(this).addClass("expanded");
	$("span.expand_heading").addClass("active");
        }, function () {
        $(this).text("Expand all");
        $(this).removeClass("expanded");
	$("span.expand_heading").removeClass("active");
    });
    $(".expand_all").click(function(){
        $(".toggle_container").slideToggle("slow");
    });

	
});
