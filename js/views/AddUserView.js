var AddUserView = Backbone.View.extend({


	initialize: function(options){
		//console.log(options);
			//this.options.data;
			 this.users = options.data.toJSON();
			//console.log('log @users = ', users);
			/*_.each(users , function (value, key) {
				//console.log('Value = ', value);
				//console.log('Key = ', key);
				    var output = 'The value is '
				            + value.id
				            + ' where the key is ' + key;
				    console.log(output, '#eachobjectunderscore');

				    <% console.log('template console - ',users) %>
			});*/

		},

	render: function(userResponse){
		var self = this;
		//this.$el.html("Add Users Content");
		//console.log('render userResponse', userResponse);
		var template = _.template($('#adduserTemplate').html());
		//console.log('template inside render - ', template);
		//console.log('this inside render', self.$el);
		//self.$el.html(template, { users: this.users });
		self.$el.html( template({ users: this.users }) );

		return this;
	}
});