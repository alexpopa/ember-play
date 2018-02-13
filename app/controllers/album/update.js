import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		changeupdatevalue(value) {
			this.set('model.updateartist_id', value)
		}
	}
});
