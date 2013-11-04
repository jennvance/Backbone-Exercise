//create ChatMessage object that extends Backbone.Model:
var ChatMessage = Backbone.Model.extend({
	//URL for JSON REST API:
	url: 'http://backchat-backend.appspot.com/messages',
	defaults: {
		author: 'Unknown',
		text: ''
	},
	//add getPurified method to ChatMessage that replaces swear words with ****:
	getPurified: function() {
		return this.get('text').replace(/shit|damn|crap/, '****');
	}
});
//create ChatMessages object that extends Backbone.Collection to hold ChatMessage models,
//and make it sort by 'time' attribute by default
var ChatMessages = Backbone.Collection.extend({
	//URL for JSON REST API:
	url: 'http://backchat-backend.appspot.com/messages',
	model: ChatMessage,
	comparator: function(message) {
		return message.get('time');
	}
});