
$(document).ready(function(){


	var usersdetails = new UsersDetails();
		usersdetails.fetch({
			success: function(){
				var uviews = new UsersViews({ collection: usersdetails });
				$('#table_id').append(uviews.render().$el);
				$('#table_id').DataTable();
			}


		});


		//console.log(usersdetails);
		var usersrepos = new UsersRepos([], { id: 3});
		usersrepos.fetch({
			success: function(){
				var urviews = new UsersReposView({ collection: usersrepos });
				$('#myModal .modal-content').append(urviews.render().$el);
			}


		});

		

});