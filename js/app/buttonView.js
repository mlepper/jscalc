var app = app || {}

define(["jquery", "underscore","backbone"], function($)	{
	app.ButtonView = Backbone.View.extend({
						tagName: 'button',
						events: {'click': 'onClick'},
						onClick: function(e){
								
							var val = $(e.currentTarget).text();
								
							},
						render: function() {
							
							this.$el.text(this.model.get('value'));
							this.$el.addClass(this.model.get('className') );
							this.$el.addClass('btn');
							return this;
						}
		});
	  });