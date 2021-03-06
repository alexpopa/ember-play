import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('recordlabel');
	},
	actions: {
		addArtist() {
			if(this.get('controller.model.name') && this.get('controller.model.name') != null && this.get('controller.model.recordlabel_id') && this.get('controller.model.recordlabel_id') != null) {
				const newArtist = this.store.createRecord('artist', {
					name: this.get('controller.model.name')
				})
				newArtist.save();
				this.set('controller.model.name', '')
				this.store.findRecord('recordlabel', this.get('controller.model.recordlabel_id')).then(function(recordlabel) {
					recordlabel.get('artists').pushObject(newArtist);
					recordlabel.save();
				})
				this.transitionTo('artist.index')
			} else {
				alert("Please make sure you have both artist name and record label");
			}
		}
	}
});

