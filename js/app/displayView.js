define(["jquery", "underscore","backbone"], function($,_,backbone)	{
	return backbone.View.extend({
              tagName: "label",
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