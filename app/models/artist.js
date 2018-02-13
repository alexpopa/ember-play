import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	recordlabel: DS.belongsTo('recordlabel'),
	albums: DS.hasMany('album')
});
