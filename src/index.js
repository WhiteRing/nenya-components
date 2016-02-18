'use strict';

module.exports = () => {
  return {
    AbstractComponent:  require('./component.abstract'),
    base:               require('./base')(),
    core:               require('./core')()
  }
};
