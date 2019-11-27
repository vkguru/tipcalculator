function billServed(){

	var billAmt = document.getElementById("billAmt").value;
	var servQual = document.getElementById("servQual").value;
	var peopleNo = document.getElementById("peopleamt").value;
	var error = document.getElementById("error");
	var error2 = document.getElementById("error2");

	if (billAmt === "") {
		error.innerHTML = " * Please enter bill amount";
		document.getElementById("total").style.display = "none";
	} else {
		error.style.display = "none";
	}

	if (servQual == 0) {
		error2.innerHTML = " * Please select a value";
		document.getElementById("total").style.display = "none";
	} else {
		error2.style.display = "none";
	}

	if (peopleNo === "" || peopleNo <= 1){
		peopleNo = 1;
		document.getElementById("each").style.display = "none";		
	} else {
		document.getElementById("each").style.display = "block";
	}

	// The major engine
	var total = (billAmt * servQual) / peopleNo;

	total = Math.round(total * 100) /100;

	total = total.toFixed(2);
	// Engine ends here

	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;

};

	
	document.getElementById("totalTip").style.display = "none";
	document.getElementById("calculate").onclick = function() {
		billServed();
	}