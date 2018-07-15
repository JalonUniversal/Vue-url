import Vue from 'vue';
import VueUrl from '../src/vue-url';
const assert = require('chai').assert;

describe('Vue-url Test Suite', function() {
  it('install, and should has a $url property in viewModel instance', function() {
    Vue.use(VueUrl);
    const viewModel = new Vue();
    assert.equal(typeof viewModel.$url, 'object');
  });

  it('shoud has parse method', function() {
    Vue.use(VueUrl);
    const viewModel = new Vue();
    assert.equal(typeof viewModel.$url.parse, 'function');
  });

  it('shoud has append method', function() {
    Vue.use(VueUrl);
    const viewModel = new Vue();
    assert.equal(typeof viewModel.$url.append, 'function');
  });
});