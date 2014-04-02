require.config(
{
"paths": {
	"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
	"underscore": "lib/underscore",
	"backbone":"lib/backbone"
  }

});


require(["app/calculatorModel", "app/mainView"], function(model, view){
	var calcView = new view({model: new model({})});

});