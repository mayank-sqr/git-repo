var AddUserView = Backbone.View.extend({

	initialize: function(options){
		//console.log(options);
			//this.options.data;
			 this.users = options.data.toJSON();
			 
			// console.log(this.model);
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
	events: {
		"change #fetchUser": "selectedUser",
		"click #submit-button": "onFormSubmit"
	},

	selectedUser: function(e){
				this.selUser =  $(e.currentTarget).val();
				this.model = new NewRepo({ user: this.selUser });
	},

	onFormSubmit: function(e) {
            e.preventDefault();
            var model = this.model;
            var newRepoValue = this.$el.find('input[name]').val();
            var newRepoDescription = this.$el.find('textarea[name]').val();
            var newRepoAccess = this.$el.find('input[name=gitradio]:checked').val();

            if(this.selUser && newRepoValue && newRepoAccess ){

                       /* console.log(this.selUser);
			            console.log(newRepoValue);
			            console.log(newRepoDescription);
			            console.log(newRepoAccess);*/

			           model.set({
			            	//login: this.selUser,
			            	name: newRepoValue,
			            	description: newRepoDescription,
			            	private: newRepoAccess
			            });

			            model.save([], {
			            	beforeSend: function (xhr) {
								  var user = "mojombo";// your actual username
								  var pass = "Mojombo123#";// your actual password
								  var token = user.concat(":", pass);
								  xhr.setRequestHeader('Authorization', ("Basic ".concat(btoa(token))));
							}
			            });
			            document.getElementById('gitForm').reset();
        }
        else{
        	console.log("Select User and New Repository are required");
        }
    },

    

	render: function(userResponse){
		var self = this;
		/*//this.$el.html("Add Users Content");
		//console.log('render userResponse', userResponse);
		var template = _.template($('#adduserTemplate').html());
		//console.log('template inside render - ', template);
		//console.log('this inside render', self.$el);
		//self.$el.html(template, { users: this.users });
		self.$el.html( template({ users: this.users }) );
*/

		var source = $("#adduserTemplate").html();
		var template = Handlebars.compile(source);
		var html = template({users: this.users});
		self.$el.html(html);

		return this;
	},


});