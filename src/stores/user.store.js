import { extendObservable, action } from 'mobx';

/**
 * @class User
 */
export default class Ui {

  constructor(state = {}) {
    extendObservable(this, {
      first_name: '',
      last_name: '',
      email: '',
      profile: {},
    }, state);
  }

  @action
  setProfile(user) {
    this.profile = user;
    Object.keys(user).forEach((key) => {
      this[key] = user[key];
    });
  }
}
