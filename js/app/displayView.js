var app = app || {}

define(["jquery", "underscore","backbone"], function($)	{
	app.DisplayView = Backbone.View.extend({
              tagName: "label",
              //attributes: { 'type': 'input', 'readonly' : 'true'},
              initialize: function() {
                this.render();
                this.listenTo(this.model,'change:current',this.render);
              },
							render: function() {
                this.$el.text (this.model.get('current'));
								return this;
              }
          });
});