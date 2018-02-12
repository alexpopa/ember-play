import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('artist');
	},
actions: {
	addArtist() {
		const newArtist = this.store.createRecord('artist', {
			name: this.get('controller.model.name')
		})
		this.set('controller.model.name', '')
		newArtist.save();
		this.transitionTo('artist.index')
		}
	}
});
