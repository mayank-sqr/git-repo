var NewRepo = Backbone.Model.extend({
	defaults: {
		name: '',
		description: '',
		private: false
	},

	initialize: function(options){
		this.options = options;
		//console.log(options);
	},

	url: function(){
		return "https://api.github.com/users/" + this.options.user + "/repos"
	}

	//urlRoot: "https://api.github.com/"+ this.login + "/repos"
});