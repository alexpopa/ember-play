import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('album', params.album_id);
	},
	actions: {
	updateAlbum(model) {
		model.set('name', this.get('controller.model.name'));
		model.save();
		this.transitionTo('album.index')
		},
	destroyAlbum(model) {
		model.destroyRecord()
		this.transitionTo('album.index')
		}
	}
});
