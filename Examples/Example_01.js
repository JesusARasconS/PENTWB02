(function () {
	"use strict";
	
	WinJS.Binding.optimizeBindingReferences = true;
	
	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;
	
	function add(n1, n2) {
		return n1 + n2;
	}

	function calc(n1, n2, processForCalc) {
		return processForCalc(n1, n2);
	}

	function executeMath() {
		setOutput(calc(4, 4, add));
	}	
	
	function queryDom() {
		var x = document.getElementById("pic");
	
	}

	
	
	}	
)();

defautl.js