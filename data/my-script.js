$(function(){
	init();
});

function init()
{
	ShowBar(CheckSite())
}
function CheckSite(){
	var url = window.location.hostname;     // Returns full URL
	var list = new Array("academianewmedia.md", "protv.md", "alerte.md");
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
	var message = "Bad site";
	var clas = "alert";
	if (type_site) {
		message = "Good site";
		clas = "success";
	};
	var newdiv1 = ( "<div class='alert-box " + clas + "'> " + message + "</div>");
	$( "body" ).prepend(newdiv1);
}