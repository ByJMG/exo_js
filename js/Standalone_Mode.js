//Standalone mode pour web-app ios
//JavaScript
function stand(){
			if (  (navigator.standalone)
	              &&
	              ((navigator.userAgent.indexOf("iPhone") > -1) || (navigator.userAgent.indexOf("iPad") > -1))
	            ) {
	            // On bloque les liens quand on est en mode web-app sur iPhone et iPad
	            event.preventDefault();
	            // On recâble le lien à la main grâce à window.location
	            window.location = this.getAttribute("href");
	        }
		}
	var sortieElt = document.getElementsByTagName("a");

	for(var i = 0, count = sortieElt.length; i < count; i++) {
    		sortieElt[i].addEventListener("click", stand,false);
	};

  //Jquery
	/*
	$(document).ready(function() {
		    $("a").click(function (event) {
		        if (  (navigator.standalone)
		              &&
		              ((navigator.userAgent.indexOf("iPhone") > -1) || (navigator.userAgent.indexOf("iPad") > -1))
		            ) {
		            // On bloque les liens quand on est en mode web-app sur iPhone et iPad
		            event.preventDefault();
		            // On recâble le lien à la main grâce à window.location
		            window.location = $(this).attr("href");
		        }
		    });
	});
*/
