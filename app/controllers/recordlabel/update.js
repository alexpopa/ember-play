import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		changevalue(value) {
			console.log("updated value");
			this.set('model.recordlabel_id', value)
		}
	}
});