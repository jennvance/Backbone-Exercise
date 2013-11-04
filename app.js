//create empty array of test messages to populate upon page render
var testMessages = [];
//create a new ChatMessages collection out of the above test messages:
var chatMessages = new ChatMessages(testMessages);

//create a new ChatMessagesView and pass the collection into it:
//render the view into the .chat-messages-wrapper element:
var messagesView = new ChatMessagesView({collection: chatMessages, el: $('.chat-messages-wrapper')}).render();

//create a new ChatFormView, pass in the chatMessages collection, render the view into the .chat-form-wrapper element
var formView = new ChatFormView({collection: chatMessages, el: $('.chat-form-wrapper')}).render();