import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('artist');
	},
	actions: {
		addAlbum() {
			if(this.get('controller.model.name') && this.get('controller.model.name') != null && this.get('controller.model.artist_id') && this.get('controller.model.artist_id') != null) {
				const newAlbum = this.store.createRecord('album', {
					name: this.get('controller.model.name')
				})
				newAlbum.save();
				this.set('controller.model.name', '')
				this.store.findRecord('artist', this.get('controller.model.artist_id')).then(function(artist) {
					artist.get('albums').pushObject(newAlbum);
					artist.save();
				})
				this.transitionTo('album.index')
			} else {
				alert("Please make sure you have both album name and artist selected");
			}
		},
	}
});
