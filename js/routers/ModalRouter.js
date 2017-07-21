var ModalRouter = Backbone.Router.extend({
	routes: {
		"modal": "modalpopup"
	},

	modalpopup: function(){
		var modalView = new ModalView({ el: ".modal-body"});
		modalView.render();
	}
});