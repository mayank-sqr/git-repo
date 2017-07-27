var UserDetail = Backbone.Model.extend({

	url: function() {
        return 'https://api.github.com/users';
    },
	
	//urlRoot: "https://api.github.com/users"
});