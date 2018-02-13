import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('album');
	},
actions: {
	addSong() {
			const newSong = this.store.createRecord('song', {
				name: this.get('controller.model.name')
			})
			this.set('controller.model.name', '')
			this.store.findRecord('album', this.get('controller.model.album_id')).then(function(album) {
				newSong.save();
				album.get('songs').pushObject(newSong);
				album.save();
			})
			this.transitionTo('album.index')
		},
	}
});
