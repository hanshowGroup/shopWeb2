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
});