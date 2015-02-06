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
	var message = "WARNING! Please close the following website, may affect your brain! :D";
	var clas = "danger";
	if (type_site) {
		message = "GOOD JOB! This website is good!";
		clas = "success";
	};
	var newdiv1 = ( "<div class='alert alert-" + clas + "' role='alert' style='text-align:center;'> " + message + "</div>");
	$( "body" ).prepend(newdiv1);
}
