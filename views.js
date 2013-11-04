//define ChatMessagesView, which renders the #chat-messages-template with the passed-in collection:
var ChatMessagesView = Backbone.View.extend({
	initialize: function() {
		var source = $('#chat-messages-template').html();
		this.template = Handlebars.compile(source);
		//listener for the 'add' event that re-renders the template:
		this.collection.bind('add', this.render, this);
		//listener for the 'reset' event on the collection that re-renders:
		this.collection.bind('reset', this.render, this);
		//change ChatMessagesView to fetch the messages from the server:
		this.collection.fetch();
		//listener for the refresh button to fetch new messages whenever clicked:
		var self = this;
		window.setInterval(function() {
			self.collection.fetch();
		}, 8000);
	},
	render: function() {
		this.$el.html(this.template({messages: this.collection.toJSON()}));
		return this;
	}
});	
//define ChatFormView: renders the #chat-form-template:
var ChatFormView = Backbone.View.extend({
	//click event for submit button: creates new ChatMessage and adds it to the collection:
	events: {
		'click button[type=submit]': 'sendChat',
		'click button[type=button]': 'refreshChats'
	},
	initialize: function() {
		var source = $('#chat-form-template').html();
		this.template = Handlebars.compile(source);
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	sendChat: function(e) {
		e.preventDefault();
		//.create instead of .add
		this.collection.create({
			author: 'testr',
			text: this.$('input').val(),
			time: (new Date()).getTime()/1000});
	},
	//fetch new messages on a timer:
	refreshChats: function(e) {
		this.collection.fetch();
	}
});