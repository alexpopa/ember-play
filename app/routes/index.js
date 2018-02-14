import Ember from 'ember';

export default Ember.Route.extend({
model() {
    this.store.push({
      data: [
        {
		id: 1,
		type: 'recordlabel',
		attributes: { name: 'Kidinakorner' },
		relationships: {
			artists: {
				data: [
					{ id: 1, type: 'artist' },
					{ id: 2, type: 'artist' }
				]
			}
		}
        }, {
		id: 2,
		type: 'recordlabel',
		attributes: { name: 'OVO Sound' },
		relationships: {
			artists: {
				data: [
					{ id: 3, type: 'artist' }
				]
			}
          }
        }, {
          id: 1,
          type: 'artist',
          attributes: { name: 'Imagine Dragons', recordlabel_id: 1 },
          relationships: {
            recordlabels: { data: [{ id: 1, type: 'recordlabel' }] },
            albums: { data: [{ id: 1, type: 'album' }] }
          }
        }, {
          id: 2,
          type: 'artist',
          attributes: { name: 'X Ambassadors', recordlabel_id: 1 },
          relationships: {
			recordlabels: { data: [{ id: 1, type: 'recordlabel'}] },
          }
        }, {
          id: 3,
          type: 'artist',
          attributes: { name: 'Drake', recordlabel_id: 2 },
          relationships: {
			recordlabels: { data: [{ id: 2, type: 'recordlabel'}] },
          }
        }, {
          id: 4,
          type: 'artist',
          attributes: { name: 'Macklemore'},
        }, {
          id: 1,
          type: 'album',
          attributes: { name: 'Night Visions', artist_id: 1 },
          relationships: {
            artists: { data: [{ id: 1, type: 'artist' }]},
            songs: { data: [{ id: 1, type: 'song' }, { id: 2, type: 'song' }, { id: 3, type: 'song' }] }
          }
        }, {
          id: 1,
          type: 'song',
          attributes: { name: 'Radioactive', album_id: 1 },
          relationships: {
            albums: { data: [{ id: 1, type: 'artist' }]}
          }
        }, {
          id: 2,
          type: 'song',
          attributes: { name: 'Tip Toe', album_id: 1 },
          relationships: {
            albums: { data: [{ id: 1, type: 'artist' }]}
          }
        }, {
          id: 3,
          type: 'song',
          attributes: { name: 'Its Time', album_id: 1 },
          relationships: {
            albums: { data: [{ id: 1, type: 'artist' }]}
          }
        }
      ]
    })
  }
});
