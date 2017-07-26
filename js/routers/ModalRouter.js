var ModalRouter = Backbone.Router.extend({
	routes: {
		"addproject": "addProject"
	},

	addProject: function(){
		var sds = new UsersDetails();
		var createRepo = new NewRepo();
		var ddf = sds.fetch({
			success: function(userResponse){
				var adduserview = new AddUserView({ 
					el: ".container", 
					data: userResponse,
				});
				adduserview.render();
			}
		});

		
	}
});

