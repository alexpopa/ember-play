import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('recordlabel', params.recordlabel_id);
	},
	actions: {
	updateRecordLabel(model) {
		model.set('name', this.get('controller.model.name'));
		model.save();
		this.transitionTo('recordlabel.index')
		},
	destroyRecordLabel(model) {
		model.destroyRecord()
		this.transitionTo('recordlabel.index')
		}
	}
});
