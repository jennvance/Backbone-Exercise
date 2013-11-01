var ChatMessage = Backbone.Model.extend({
	defaults: {author: 'Unknown',
	text: '',
	},
	getPurified: function() {
		return this.get('text').replace(/shit|damn|crap/, '****');
	}
});

var ChatMessages = Backbone.Collection.extend({
	model: ChatMessage,
	comparator: function(message) {
		return message.get('time');
	}
});