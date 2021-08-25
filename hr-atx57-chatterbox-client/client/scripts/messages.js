var Messages = {

  storage: {},

  items: function() {
    return Object.values(Messages.storage);
  },

  add: function(message){
    Messages.storage[message.objectId] = Messages.conform(message);
  },

  update: function(messages, callback) {
    for (const message of messages) {
      Messages.data[message.objectId] = message;
    }
    callback(Object.values(Messages.storage));
  },

  conform: function(message) {
    messages.text = message.text || '';
    messages.username = message.username || '';
    messages.roomname = message.roomname || '';
    return message;
  }

};