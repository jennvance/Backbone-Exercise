//create ChatRouter that defines routes for "room" and URLs like "/#user/123"
var ChatRouter = Backbone.Router.extend({
	routes: {
		"room": "room",
		"user/:id": "profile"
	},
	room: function() {
		//create a new ChatMessages collection called chatMessages:
		var chatMessages = new ChatMessages();
		//create a new ChatMessagesView and pass the collection into it:
		//render the view into the .chat-messages-wrapper element:
		var messagesView = new ChatMessagesView({collection: chatMessages, el: $('.chat-messages-wrapper')}).render();
		//create a new ChatFormView, pass in the chatMessages collection, render the view into the .chat-form-wrapper element
		var formView = new ChatFormView({collection: chatMessages, el: $('.chat-form-wrapper')}).render();
	}
	// profile: function(id) {
	// 	$('.wrapper').append("No profile yet");
	// }
})