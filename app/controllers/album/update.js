import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		changevalue(value) {
			this.set('model.artist_id', value)
		}
	}
});
