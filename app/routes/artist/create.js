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
		const RecordLabel =  this.store.findRecord('recordlabel', this.get('controller.model.recordlabel_id'))
		newArtist.save();
		RecordLabel.get('artists').pushObject(newArtist);
		RecordLabel.save();
		this.transitionTo('artist.index')
		}
	}
});
