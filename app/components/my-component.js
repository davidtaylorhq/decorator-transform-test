import Component from '@glimmer/component';

const myDecorator = (klass) => klass;

@myDecorator
export default class MyComponent extends Component {}
