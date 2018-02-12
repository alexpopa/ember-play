import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('song', params.song_id);
	},
	actions: {
	updateSong(model) {
		model.set('name', this.get('controller.model.name'));
		model.save();
		this.transitionTo('song.index')
		},
	destroySong(model) {
		model.destroyRecord()
		this.transitionTo('song.index')
		}
	}
});
