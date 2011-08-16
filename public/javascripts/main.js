$(document).ready(function() {


//    $(function() {
        $("#portal-tabs").tabs();
	
	$("#gene-tabs").tabs({
	    cache: true
	    //ajaxOptions: { async: false, cache: true }
	});

	$("#function-tabs").tabs();

	$("#motif-tabs").tabs();

	$("#homology-tabs").tabs();

	$("#interaction-tabs").tabs();

	$("#network-tabs").tabs({
	    cache: true
	});

/*
	    $("#network-tabs").tabs({
	        //load: function(event, ui){
	        //    $(ui.tab).data("cache.tabs",($(ui.panel).html() == "") ? false : true);
	        //},
	        //cache: true,
	    });
*/
	$("#related-tabs").tabs();

	$("#gene-function-tabs").tabs();

//    });

    addCollapsingDivListeners(true);


    // from http://www.snilesh.com/resources/jquery/jquery-expand-collapse-expand-all-collapse-all/
    $(".toggle_container").hide();
    $("span.expand_heading").toggle(function(){
        $(this).addClass("active");
	//console.debug("test!! " + $('#network-tabs').children('div').css('backgroundColor','#0ff')); //addClass("ui-tabs-hide"));
        }, function () {
        $(this).removeClass("active");
	//$('#network-tabs').children('div').addClass("ui-tabs-hide");
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
