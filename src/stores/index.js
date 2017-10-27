import UiStore from './ui.store';
import UserStore from './user.store';

export default {
  ui: new UiStore(),
  user: new UserStore(),
}