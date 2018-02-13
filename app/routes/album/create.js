import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('artist');
	},
	actions: {
		addAlbum() {
			const newAlbum = this.store.createRecord('album', {
				name: this.get('controller.model.name')
			})
			this.set('controller.model.name', '')
			this.store.findRecord('artist', this.get('controller.model.artist_id')).then(function(artist) {
				newAlbum.save();
				artist.get('albums').pushObject(newAlbum);
				artist.save();
			})
			this.transitionTo('album.index')
		},
	}
});
