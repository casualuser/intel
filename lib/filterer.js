/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function Filterer() {
  this._filters = [];
}

Filterer.prototype = {

  filter: function filter(record) {
    var i = this._filters.length;
    while (i--) {
      if (!this._filters[i].filter(record)) {
        return false;
      }
    }
    return true;
  },

  addFilter: function addFilter(filter) {
    this._filters.push(filter);
    return this;
  },

  removeFilter: function removeFilter(filter) {
    var index = this._filters.indexOf(filter);
    if (index !== -1) {
      this._filters.splice(index, 1);
    }
    return this;
  }

};

module.exports = Filterer;
