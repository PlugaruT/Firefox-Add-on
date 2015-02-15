$(function(){
	init();
});

function init()
{
	ShowBar(CheckSite())
}
function CheckSite(){
	var url = window.location.hostname;     // Returns full URL
	var list = new Array("academianewmedia.md", "mediapoint.md", "alerte.md");
	var result = $.inArray(url, list);
	if (result > -1) {
		return true;
	} else {
		return false;
	}
}

function ShowBar(type_site)
{
	console.log(type_site);
	var message = "WARNING! Please close the website, may affect your brain! :D";
	var clas = "danger";
	var ico = ( "<i class= 'fa fa-plus-circle'></i>" );
	if (type_site) {
		message = "GOOD JOB! This website is good!";
		clas = "success";
		var ico = ( "<i class= 'fa fa-check'></i>" );
	};
	var icon_class = "fa fa-times";
	var icon_style = "font-size:20px; top: 0px; position:absolute; right:0px; cursor: pointer;"
	var icon = ( "<i class= 'fa fa-times' id = 'lala' style = '" + icon_style +"' ></i>" );
	var newdiv1 = ( "<div class='alert alert-" + clas + "' role='alert' style='text-align:center;display:none;' id='mediapoint'> " + ico + message + icon + "</div>");
	$( "#mediapoint" ).remove();
	$( "body" ).prepend(newdiv1);
	//$( "body" ).prepend(icon);
	$( "#mediapoint" ).show('fast');
	$( "#lala" ).on('click', function() {
		$( "#mediapoint" ).hide('slow');
	});
}
