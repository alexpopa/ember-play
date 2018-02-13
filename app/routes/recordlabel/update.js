import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('recordlabel', params.recordlabel_id);
	},
	actions: {
	updateRecordLabel(model) {
		if(this.get('controller.model.name') && this.get('controller.model.name') != null ) {
			model.set('name', this.get('controller.model.name'));
			model.save();
			this.transitionTo('recordlabel.index')
		} else {
			alert("Please add Record Label Name");
		}
	},
	destroyRecordLabel(model) {
		model.destroyRecord()
		this.transitionTo('recordlabel.index')
		}
	}
});
