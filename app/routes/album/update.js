import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			album: this.store.findRecord('album', params.album_id),
			artists: this.store.findAll('artist')
		})
	},
	actions: {
	updateAlbum(model) {
		if(this.get('controller.model.album.name') && this.get('controller.model.album.name') != null && this.get('controller.model.updateartist_id') && this.get('controller.model.updateartist_id') != null) {
			model.album.set('name', this.get('controller.model.album.name'));
			const artistnew = this.store.findRecord('artist', this.get('controller.model.updateartist_id'))
			model.album.get('artist').then(function(artistold) {
				artistnew.then(function(artistnew) {
					model.album.set('artist', artistnew)
					if (artistold) {
						artistold.save();
					}
					artistnew.save();
				})
			})
			model.album.save();
			this.transitionTo('album.index')
		} else {
			alert("Please make sure you have both album name and artist selected");
		}
	},
	destroyAlbum(model) {
		model.album.destroyRecord()
		this.transitionTo('album.index')
		}
	}
});
