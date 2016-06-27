import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setUrl() { 
      this.set('holder.url', this.$(`#${this.get('inputId')}`).val());
    }
  }
});
