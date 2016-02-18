'use strict';

let AbstractNenyaComponent = require('../../component.abstract');
let m = require('mithril');
let NenyaWrapper = require('nenya-wrappers');
let NenyaButton = require('../../base/button');

class NenyaBody extends AbstractNenyaComponent {

  constructor (store) {
    super({});

    this.store = store;
  }

  model () {
    this.wrapper = m.prop();
    this.btn     = m.prop();
  }

  controller () {
    this.wrapper(new NenyaWrapper());
    this.btn(new NenyaButton.component({
      onClick: () => {
        console.log("Button clicked");
      }
    }));
  }

  view (ctrl, args) {
    // jssStyle.attach();
    return m('body', [
      m.component(this.wrapper().m()),
      m.component(this.btn().m())
    ]);
  }
}



module.exports = {
  component: NenyaBody
}
