import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('recordlabel');
	},
	actions: {
		addArtist() {
 			const newArtist = this.store.createRecord('artist', {
 				name: this.get('controller.model.name')
 			})
 			this.set('controller.model.name', '')
 			// this.store.findRecord('recordlabel', this.get('controller.model.recordlabel_id')).then(function(recordlabel) {
 			// 	newArtist.save();
 			// 	recordlabel.get('artists').pushObject(newArtist);
 			// 	recordlabel.save();
 			// })
 			this.transitionTo('artist.index')
 		},
	}
});

