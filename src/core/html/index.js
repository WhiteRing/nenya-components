'use strict';

let AbstractNenyaComponent = require('../../component.abstract');
let m = require('mithril');
let NenyaHead = require('../head');
let NenyaBody = require('../body');

class NenyaHTML extends AbstractNenyaComponent {

  constructor (store) {
    super({});

    this.store = store;
  }

  model () {
    this.head = new NenyaHead.component(this.store);
    this.body = new NenyaBody.component(this.store);
  }

  view (ctrl, args) {
    // jssStyle.attach();
    return m('html', [
      m.component(this.head.m()),
      m.component(this.body.m())
    ]);
  }
}



module.exports = {
  component: NenyaHTML
}
