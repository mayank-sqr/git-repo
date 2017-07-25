var ModalRouter = Backbone.Router.extend({
	routes: {
		"adduser": "addUser",
		"adduser/:adduserid": "fetchUserDatabyID"
	},

	fetchUserDatabyID: function(adduserid){
		console.log('user ID');
	},

	addUser: function(){
		var sds = new UsersDetails();
		var ddf = sds.fetch({
			success: function(userResponse){
				var adduserview = new AddUserView({ 
					el: ".container", 
					data: userResponse 
				});
				adduserview.render();
			}
		});

		
	}
});

