import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	artist: DS.belongsTo('artist'),
	songs: DS.hasMany('song')
});
