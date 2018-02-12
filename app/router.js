import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recordlabel', function() {
      this.route('create');
      this.route('update', { path: 'update/:recordlabel_id' });
  });

  this.route('album', function() {
    this.route('create');
    this.route('update', { path: 'update/:album_id' });
  });
  this.route('song', function() {
    this.route('create');
    this.route('update', { path: 'update/:song_id' });
  });
  this.route('artist', function() {
    this.route('create');
    this.route('update', { path: 'update/:artist_id' });
  });
});

export default Router;
