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

	$("#slider-residual").slider({
	    value: 0.4,
	    min: 0.2,
	    max: 0.6,
	    step: 0.05,
	    change: function(event, ui) {
	            $("#residual").val(ui.value);
	    }
	}).bind({
	    slidechange : function(event, ui) {
	                  vis.filter("nodes", function(node) { return node.data.resid <= $ ("#residual").val(); }, false );
			  vis.layout('Preset');
			  vis.visualStyle();
	    }
	});
	$("#residual").val($("#slider-residual").slider("value"));
	//$("#residual").change(function() {
	//    $("#slider-residual").slider("value", $("#residual").val());
	//});

	$("#slider-weight").slider({
	    value: 0,
	    min: -0.3,
	    max: 0.3,
	    step: 0.05,
	    change: function(event, ui) {
	            $("#weight").val(ui.value);
	    }
	}).bind({
	    slidechange : function(event, ui) {
	                  vis.filter("edges", function(edge) { return edge.data.weight <= $ ("#weight").val(); }, false );             
			  vis.layout('Preset');
			  vis.visualStyle();
	    }
	});
	$("#weight").val($("#slider-weight").slider("value"));
	//$("#weight").change(function() {
	//   $("#slider-weight").slider("value", $("#weight").val());
	//});

	$("#reset_residual").click(function() {
	    $("#slider-residual").slider( { value: 0.4 } );
	    vis.filter("nodes", function(node) { return lookup[node.data.id] == "true"; } );
	    //vis.removeFilter("nodes", false);
	});

	$("#reset_weight").click(function() {
	    $("#slider-weight").slider( { value: 0 } );
	    vis.removeFilter("edges", false);
	});

	$("#hide_bicluster").click(function() {
	    vis.filter("nodes", function(node) { return node.data.type != "bicluster"; }, false );
	    vis.layout('Preset');
	    vis.visualStyle();
	});

	$("#hide_andgate").click(function() {
	    vis.filter("nodes", function(node) { return node.data.type != "AND_Gate"; }, false );
	    vis.layout('Preset');
	    vis.visualStyle();
	});

	$("#hide_regulator").click(function() {
	    vis.filter("nodes", function(node) { return node.data.type != "regulator"; }, false );
	    vis.layout('Preset');
	    vis.visualStyle();
	});

	$("#hide_genes").click(function() {
	    vis.filter("nodes", function(node) { return node.data.type != "gene"; }, false );
	    vis.layout('Preset');
	    vis.visualStyle();
	});

	$("#reset_all").click(function() {
	    vis.filter("nodes", function(node) { return lookup[node.data.id] == "true"; } );
	    //vis.removeFilter("edges", false);
	});

	$("input:button, a, button", "#filter-section").button();
	$("#buttonpanel").buttonset();

	
});
