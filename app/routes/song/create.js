import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('song');
	},
actions: {
	addSong() {
		const newSong = this.store.createRecord('song', {
			name: this.get('controller.model.name')
		})
		this.set('controller.model.name', '')
		newSong.save();
		this.transitionTo('song.index')
		}
	}
});
