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
			model.song.save();
			// this.set('controller.model.name', '')
			this.store.findRecord('album', this.get('controller.model.updatealbum_id')).then(function(album) {
				model.song.set('album', album)
				album.save();
			})
			this.transitionTo('song.index')
		} else {
			alert("Please make sure you have both song name and artist selected");
		}
	},
	destroySong(model) {
		model.destroyRecord()
		this.transitionTo('song.index')
		}
	}
});
