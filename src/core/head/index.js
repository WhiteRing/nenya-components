'use strict';

let AbstractNenyaComponent = require('../../component.abstract');
let m = require('mithril');
let NenyaTitle = require('../title');

class NenyaHead extends AbstractNenyaComponent {

  constructor (store) {
    super({});
    
    this.store = store;
  }

  model () {
    this.title = this.store.getPageTitle();
  }

  view (ctrl, args) {
    // jssStyle.attach();
    return m('head', [
      m('title', this.title)
    ]);
  }
}



module.exports = {
  component: NenyaHead
}
