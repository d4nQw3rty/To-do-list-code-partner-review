export default class Functions {
  static hide(element) {
    element.classList.add('hide');
    element.classList.remove('show');
  }

  static show(element) {
    element.classList.add('show');
    element.classList.remove('hide');
  }
}