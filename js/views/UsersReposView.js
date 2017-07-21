var UsersReposView = Backbone.View.extend({
	tagName: "div",
	className: "modal-body",

	render: function(){
		//console.log(this);

		var self = this;
		this.collection.each(function(UserRepo){
			//console.log(UserRepo);
			var urview = new UserRepoView({ model: UserRepo });
			self.$el.append(urview.render().$el);

			//console.log(uview.render());
		});
		
		return this;
	}
})