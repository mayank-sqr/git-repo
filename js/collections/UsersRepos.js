var UsersRepos = Backbone.Collection.extend({
initialize: function(models, options) {
    this.id = options.id;
  },
	url: function() {
        return 'https://api.github.com/users/' + this.id + '/repos';
    },
	model: UserRepo

	//url: "https://api.github.com/users/3/repos",
});