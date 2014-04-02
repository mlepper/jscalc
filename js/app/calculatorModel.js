//calculator model
define(["jquery", "underscore","backbone"], function($,_,backbone)	{
			var operations = {
							none: undefined,
							"+": function(a,b) { return a+b;},
							"-": function(a,b) { return a-b},
							"*": function(a,b) {return a*b},
							"/": function(a,b) {return a/b}
							};
							
	return backbone.Model.extend({
						operations: operations,
						
						defaults: {
								'current': '0',
								'last': '0',
								'done': false,
								'requestedOperation': operations.none
							},
						numberInput: function(val) {
							var current = this.getCurrentValue();
							
							if (current == '0') current = '';
							current += val;
							
							this.set('current', current);
							
						},
						decimalInput: function(){
							var current = this.getCurrentValue();
							
							if (current.indexOf(".") === -1){
								this.set('current', current + ".");
							}
						},
						operationInput: function(val){
							if ( operations[val] ){
								this.set( {
									'last': this.get('current'),
									'requestedOperation': operations[val],
									'done': true
								});
							}
						},
						calculate: function() {
							var a = parseFloat(this.get('last'));
							var b = parseFloat(this.get('current'));
							var func = this.get('requestedOperation');
							var result;
							if (func){
								result = func(a,b);
								if (! $.isNumeric(result)) result = 0;
								this.set({
											'current': String(result) 
												 });
							}
						},
						reset: function() {
							this.set({
								'current': '0',
								'last': '0',
								'done': false,
								'requestedOperation': operations.none
							});
						},
						getCurrentValue: function(){
							//helper
							var current = this.get('current');
							if (this.get('done')){
								current = '0';
								this.set('done',false);
							}
							
							return current;
						}
						
					});
});