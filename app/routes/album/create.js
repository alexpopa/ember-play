import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('album');
	},
actions: {
	addAlbum() {
		const newAlbum = this.store.createRecord('album', {
			name: this.get('controller.model.name')
		})
		this.set('controller.model.name', '')
		newAlbum.save();
		this.transitionTo('album.index')
		}
	}
});
