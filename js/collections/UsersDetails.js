var UsersDetails = Backbone.Collection.extend({
	model: UserDetail,

	url: "https://api.github.com/users"
});