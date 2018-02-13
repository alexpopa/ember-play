import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('album');
	},
	actions: {
		addSong() {
			if(this.get('controller.model.name') && this.get('controller.model.name') != null && this.get('controller.model.album_id') && this.get('controller.model.album_id') != null) {
				const newSong = this.store.createRecord('song', {
					name: this.get('controller.model.name')
				})
				newSong.save();
				this.set('controller.model.name', '')
				this.store.findRecord('album', this.get('controller.model.album_id')).then(function(album) {
					album.get('songs').pushObject(newSong);
					album.save();
				})
				this.transitionTo('album.index')
			} else {
				alert("Please make sure you have both song name and album selected");
			}
		},
	}
});
