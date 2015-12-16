$(document).ready(function() {
    /* ---------- Pie chart ---------- */
	var eslData = [
	{ label: "掉线",  data: 53},
	{ label: "无绑定",  data: 57},
	{ label: "低电量",  data: 90},
	{ label: "正常使用",  data: 800}
	];
	var apData = [
	{ label: "离线",  data: 1},
	{ label: "在线",  data: 9}
	];
    var goodsData=[
    {label:"已绑",data:500},
        {label:"未绑",data:20}
    ];
	if($("#eslPie").length)
	{
		$.plot($("#eslPie"), eslData,
		{
			series: {
					pie: {
							show: true
					}
			},
			grid: {
					hoverable: true,
					clickable: true
			},
			legend: {
				show: false
			},
			colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
		});
		
		function pieHover(event, pos, obj)
		{
			if (!obj)
					return;
			percent = parseFloat(obj.series.percent).toFixed(2);
			$("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
		}
		$("#eslPie").bind("plothover", pieHover);
	}
    if($("#apPie").length)
	{
		$.plot($("#apPie"), apData,
		{
			series: {
					pie: {
							show: true
					}
			},
			grid: {
					hoverable: true,
					clickable: true
			},
			legend: {
				show: false
			},
			colors: ["#FA5833", "#78CD51"]
		});
		
		function pieHover(event, pos, obj)
		{
			if (!obj)
					return;
			percent = parseFloat(obj.series.percent).toFixed(2);
			$("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
		}
		$("#eslPie").bind("plothover", pieHover);
	}
    if($("#goodsPie").length)
	{
		$.plot($("#goodsPie"), goodsData,
		{
			series: {
					pie: {
							show: true
					}
			},
			grid: {
					hoverable: true,
					clickable: true
			},
			legend: {
				show: false
			},
			colors: ["#FA5833", "#78CD51"]
		});
		
		function pieHover(event, pos, obj)
		{
			if (!obj)
					return;
			percent = parseFloat(obj.series.percent).toFixed(2);
			$("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
		}
		$("#eslPie").bind("plothover", pieHover);
	}
    var hash = window.location.hash.substr(1);
    var href = $('.main-menu li a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html';
            $('#content').load(toLoad);
        } 
    });
     
    $('.main-menu li a:not(.dropmenu)').click(function(){
     
    var toLoad = $(this).attr('href');
    $('#content').hide('fast',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
	var jsScript="hs_js/"+toLoad.substr(0,toLoad.length-5)+".js";
	loadJs(jsScript);
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    
    function loadContent() {
        $('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
        $('#content').show('normal',hideLoader());
    }
    function hideLoader() {
        $('#load').fadeOut('normal');
    }
    return false;
     
    });
});