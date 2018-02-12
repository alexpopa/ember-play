import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('recordlabel');
	},
actions: {
	addRecordLabel() {
		const newRecordLabel = this.store.createRecord('recordlabel', {
			name: this.get('controller.model.name')
		})
		this.set('controller.model.name', '')
		newRecordLabel.save();
		// this.transitionTo('recordlabel.update', newRecordLabel.get('id'))
		this.transitionTo('recordlabel.index')
		}
	}
});
