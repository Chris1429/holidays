function init() {
	document.title = "Belgium"
	header();

	function header() {
		var x = document.createElement("HEADER");
		x.setAttribute("id", "myHeader");
		document.body.appendChild(x);
		
		var y = document.createElement("H4"); 
		var t = document.createTextNode("Belgium & Spa");
		y.appendChild(t);

		document.getElementById("myHeader").appendChild(y);
	}
	/*
	function body(){
		
	
	}
	
	function nav() {
		
	
	}	
	*/
};

window.onload=init;