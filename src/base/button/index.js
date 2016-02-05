'use strict';

let AbstractNenyaComponent = require('../../component.abstract');
let m = require('mithril');
let NButtonClasses = require('./style/classes');

const BUTTON_SIZES = require('./sizes.conf');
// import jssStyle from './style';

class NenyaButton extends AbstractNenyaComponent {

  constructor (options) {
    super(options);

    this.options = {
      tag: 'button',
      label: 'Button',
      size: BUTTON_SIZES.NORMAL
    };    
  }

  model () {
    this.theme = m.prop();
    this.tag   = m.prop(this.options.tag);
    this.label = m.prop(this.options.label);
    this.descriptor = m.prop(this.tag());
  }

  controller(args) {
    let options = Object.assign({}, this.options, args);

    // this.size = m.prop(options.size);
    this.tag = m.prop(options.tag);
    this.label = m.prop(options.label);
    this.descriptor = m.prop(options.tag + NButtonClasses.NBUTTON);

    if (options.size != BUTTON_SIZES.NORMAL) {
      this.descriptor = m.prop(this.descriptor() + NButtonClasses[options.size]);
    }
  }

  view(ctrl, args) {
    // jssStyle.attach();
    return m(this.descriptor(), this.label());
  }
}



module.exports = {
  component: NenyaButton,
  sizes: BUTTON_SIZES
}

