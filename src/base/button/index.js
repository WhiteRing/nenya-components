'use strict';

let AbstractNenyaComponent = require('../../component.abstract');
let m = require('mithril');
let NButtonClasses = require('./style/classes');

const BUTTON_SIZES = require('./sizes.conf');
// import jssStyle from './style';

class NenyaButton extends AbstractNenyaComponent {

  constructor (options) {
    let defaults = {
      tag: 'button',
      label: 'Button',
      size: BUTTON_SIZES.NORMAL
    };

    super(Object.assign({}, defaults, options));
  }

  model () {
    this.theme = m.prop();
    this.tag   = m.prop(this.options.tag);
    this.label = m.prop(this.options.label);
    this.descriptor = m.prop(this.tag());
    this.actions = {};
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
    
    if (this.options.onClick) {
      this.actions.onclick = this.options.onclick;
    }
  }

  view(ctrl, args) {
    // jssStyle.attach();
    var btn = m(this.descriptor(), {onclick: function(){console.log(123);}}, this.label());
    console.log(btn);
    return btn;
  }
}



module.exports = {
  component: NenyaButton,
  sizes: BUTTON_SIZES
}
