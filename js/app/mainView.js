//renders the calculator on the page
define(["jquery", "underscore","backbone","app/buttonView","app/displayView"], function($, _, backbone, buttonView, displayView)	{
  return backbone.View.extend(
      {
        el: $('#calcContainer'),
        
        initialize: function() {
          this.render();
        },     
        render: function() {
          //render the input field showing the main numerical display
          this.display = new displayView({model:this.model});
          $("#display").append(this.display.render().el);
          
          //helper function to generate calculator buttons
          var generateButton= function(parentId, value, className){
            var model = new Backbone.Model({ value: value,  className: className === undefined ? '' : className});
            var b = new buttonView( {	model: model } );
            $(parentId).append( b.render().el );
          }
          //spacing hack
          // Just adding a comment...
          generateButton("#row1",'-','hide');
          //spacing hack 
          generateButton("#row1",'-','hide');
          
          generateButton("#row1",'C','clear');
          generateButton("#row1",'/','operation');
          generateButton("#row2",'7','number');
          generateButton("#row2",'8','number');
          generateButton("#row2",'9','number');
          generateButton("#row2",'*','operation');
          generateButton("#row3",'4','number');
          generateButton("#row3",'5','number');
          generateButton("#row3",'6','number');
          generateButton("#row3",'-','operation');
          generateButton("#row4",'1','number');
          generateButton("#row4",'2','number');
          generateButton("#row4",'3','number');
          generateButton("#row4",'+','operation');
          //spacing hack
          generateButton("#row5",'-','hide');
          
          generateButton("#row5",'0','number');
          generateButton("#row5",'.','decimal');
          generateButton("#row5",'=','equals');
          
          return this;
        },
        
        events: {
          'click .number' : 'onNumberClick',
          'click .operation' : 'onOperationClick',
          'click .clear' : 'onClearClick',
          'click .decimal' : 'onDecimalClick',
          'click .equals' : 'onEqualsClick'
          },
          
        onNumberClick: function(e){
          var val = $(e.currentTarget).text()
          this.model.numberInput(val);
        },
        onOperationClick: function(e) {
          var val = $(e.currentTarget).text()
          this.model.operationInput(val);
        },
        onEqualsClick: function(e) {
          this.model.calculate();
        },
        onClearClick: function(e){
          this.model.reset();
        },
        onDecimalClick: function(e){
          this.model.decimalInput();
        }
        
      }
  
  
  );
});


