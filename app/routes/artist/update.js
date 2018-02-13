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
			model.artist.save();
			// this.set('controller.model.name', '')
			this.store.findRecord('recordlabel', this.get('controller.model.updaterecordlabel_id')).then(function(recordlabel) {
				model.artist.set('recordlabel', recordlabel)
				recordlabel.save();
			})
			this.transitionTo('artist.index')
		} else {
			alert("Please make sure you have both artist name and record label");
		}
	},
	destroyArtist(model) {
		model.destroyRecord()
		this.transitionTo('artist.index')
		}
	}
});
