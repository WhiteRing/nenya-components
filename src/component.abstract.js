'use strict';

class AbstractNenyaComponent {

  constructor (options) {
    if (new.target === AbstractNenyaComponent) throw TypeError('New of abstract class AbstractNenyaComponent');

    let self = this;

    self.options = Object.assign({}, this.options, options);

    self.mithril = {
      controller: function () {
        self.model();
        self.controller.apply(self, arguments);
      },

      view: function () {
        return self.view.apply(self, arguments);
      }
    };
  }

  reducer (state) { throw TypeError('Method "reducer" should be overriden in children'); }

  model (state) {}

  controller (state) {}

  view (state) { return []; }

  m () { return this.mithril; }
}



module.exports = AbstractNenyaComponent;
