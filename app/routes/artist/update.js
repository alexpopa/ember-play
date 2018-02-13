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
		model.artist.set('name', this.get('controller.model.name'));
		model.artist.save();
		// this.set('controller.model.name', '')
		this.store.findRecord('recordlabel', this.get('controller.model.updaterecordlabel_id')).then(function(recordlabel) {
			model.artist.set('recordlabel', recordlabel)
			recordlabel.save();
		})
		this.transitionTo('artist.index')
		},
	destroyArtist(model) {
		model.destroyRecord()
		this.transitionTo('artist.index')
		}
	}
});
