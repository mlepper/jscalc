var app = app || {}

define(["jquery", "underscore","backbone"], function($)	{
	app.DisplayView = Backbone.View.extend({
              tagName: "input",
              attributes: { 'type': 'input' },
              initialize: function() {
                this.render();
                this.listenTo(this.model,'change:current',this.render);
              },
							render: function() {
                this.$el.val (this.model.get('current'));
								return this;
              }
          });
});