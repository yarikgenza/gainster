import { extendObservable, action } from 'mobx';

/**
 * @class Ui
 */
export default class Ui {

  constructor(state = {}) {
    extendObservable(this, {
      title: 'Gainster',
      isDrawerOpen: false,
    }, state);
  }

  @action
  toggleDrawer(open) {
    this.isDrawerOpen = ((open !== undefined) ? open : !this.isDrawerOpen);
  }
}
