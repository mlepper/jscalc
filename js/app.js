requirejs.config(
{
"baseUrl" : "js/lib",
"paths": {
	"app" : "../app"
  }

});

//
require(["app/calculatorModel", "app/mainView"], function(model, view){

	
	var calcView = new view({model: new model({})});

});