import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			artist: this.store.findRecord('artist', params.artist_id),
			recordlabels: this.store.findAll('recordlabel')
		})
	},
	actions: {
	updateArtist(model) {
		if(this.get('controller.model.artist.name') && this.get('controller.model.artist.name') != null && this.get('controller.model.updaterecordlabel_id') && this.get('controller.model.updaterecordlabel_id') != null) {
			model.artist.set('name', this.get('controller.model.artist.name'));
			const recordlabelnew = this.store.findRecord('recordlabel', this.get('controller.model.updaterecordlabel_id'))
			model.artist.get('recordlabel').then(function(recordlabelold) {
				recordlabelnew.then(function(recordlabelnew) {
					model.artist.set('recordlabel', recordlabelnew)
					if (recordlabelold) {
						recordlabelold.save();
					}
					recordlabelnew.save();
				})
			})
			model.artist.save();
			this.transitionTo('artist.index')
		} else {
			alert("Please make sure you have both artist name and record label");
		}
	},
	destroyArtist(model) {
		model.artist.destroyRecord()
		this.transitionTo('artist.index')
		}
	}
});
