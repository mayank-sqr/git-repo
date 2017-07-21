var UserRepoView = Backbone.View.extend({
	render: function(){
		var template = $('#modalTemplate').html();
		var html = Mustache.render(template, this.model.toJSON());
		this.setElement(html);
		//console.log(this.model.toJSON());
		return this;
	}
})