import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('artist', params.artist_id);
	},
	actions: {
	updateArtist(model) {
		model.set('name', this.get('controller.model.name'));
		model.save();
		this.transitionTo('artist.index')
		},
	destroyArtist(model) {
		model.destroyRecord()
		this.transitionTo('artist.index')
		}
	}
});
