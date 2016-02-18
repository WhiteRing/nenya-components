'use strict';

let AbstractNenyaComponent = require('../../component.abstract');
let m = require('mithril');

class NenyaTitle extends AbstractNenyaComponent {

  view (ctrl, args) {
    // jssStyle.attach();
    return m('title', args.title);
  }
}



module.exports = {
  component: NenyaTitle
}
