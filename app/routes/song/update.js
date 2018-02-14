import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			song: this.store.findRecord('song', params.song_id),
			albums: this.store.findAll('album')
		})
	},
	actions: {
	updateSong(model) {
		if(this.get('controller.model.song.name') && this.get('controller.model.song.name') != null && this.get('controller.model.updatealbum_id') && this.get('controller.model.updatealbum_id') != null) {
			model.song.set('name', this.get('controller.model.song.name'));
			const albumnew = this.store.findRecord('album', this.get('controller.model.updatealbum_id'))
			model.song.get('album').then(function(albumold) {
				albumnew.then(function(albumnew) {
					model.song.set('album', albumnew)
					if (albumold) {
						albumold.save();
					}
					albumnew.save();
				})
			})
			model.song.save();
			this.transitionTo('song.index')
		} else {
			alert("Please make sure you have both song name and artist selected");
		}
	},
	destroySong(model) {
		model.song.destroyRecord()
		this.transitionTo('song.index')
		}
	}
});
