var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');

module.exports = Reflux.createStore({
  listenables: [Action],
  getImage: function(id){
    Api.get('galery' + id + '/comments')
      .then(function(json){
        this.comment = json.data;
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.comment);
  }
})
