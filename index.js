/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-unbounce',
  contentFor: function (type, config) {
    if (type === 'body-footer') {
      return `<script src="${config.unbounce.url}" id="unbounce-convertable" async></script>`;
    }
  }
};
