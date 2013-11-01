var ChatMessage = Backbone.Model.extend({
	defaults: {title: 'Unknown',
	author: '',
	},
});

var ChatMessages = Backbone.Collection.extend({
	model: ChatMessage,
	comparator: function(model) {
		return model.get('time');
	}
});

function getPurified(){}
getPurified.prototype.ChatMessage = function(){}
var pure = new ()
pure.ChatMessage()

ChatMessages.each(function(book) {
	console.log(ChatMessages.get('title'));
})


$('body').append(view.render().$el);			