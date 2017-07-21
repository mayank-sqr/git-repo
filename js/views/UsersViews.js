var UsersViews = Backbone.View.extend({
	tagName: "tbody",
	//id: "DocumentResults",


	render: function(){
		//console.log(this);

		var self = this;
		this.collection.each(function(UserDetail){
		//	console.log(UserDetail);
			var uview = new UserView({ model: UserDetail });
			self.$el.append(uview.render().$el);

			//console.log(uview.render());
		});
		
		return this;
	}
});