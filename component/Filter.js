export default class Filter {
  /*判断对象为空*/
  static isEmpty(obj) {
    if (
      typeof obj != 'number' &&
      (!obj ||
        obj == null ||
        obj == ' ' ||
        obj == undefined ||
        typeof obj == 'undefined')
    ) {
      return true;
    }
    return false;
  }
  /*判断对象不为空*/
  static isNotEmpty(obj) {
    if (!this.isEmpty(obj)) {
      return true;
    }
    return false;
  }
}
