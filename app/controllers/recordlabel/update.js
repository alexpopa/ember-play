import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		changevalue(value) {
			this.set('model.recordlabel_id', value)
		}
	}
});