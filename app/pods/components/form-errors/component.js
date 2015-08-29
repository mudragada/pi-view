import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-errors-container', 'qa-form-errors'],

  showStickyMessages: true,

  errors: function () {
    return this.messagesOfType('error');
  }.property('formErrors'),
  messagesOfType: function (filterType) {
    var formErrors = this.get('formErrors');
    var messages = [];

    if (formErrors && formErrors.length) {
      messages = formErrors.filterBy('type', filterType);

      // if (messages && messages.length) {
      //   messages = this.sortMessages(messages);
      //   messages = this.groupMessages(messages, filterType);
      //   messages = this.translateMessages(messages);
      // }
    }
    return messages || [];
  }
});
