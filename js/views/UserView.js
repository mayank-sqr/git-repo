var UserView = Backbone.View.extend({
	//tagName: "div",
	//className: "container",

	render: function(){
		//this.$el.html(this.model.attributes);
		//console.log(this.model);

		var template = $('#userTemplate').html();
		//console.log(template);
		var html = Mustache.render(template, this.model.toJSON());
		this.setElement(html);
		//console.log(this.model.toJSON());
		//this.setElement(this.template(this.model.toJSON()));
		return this;
	}
});


