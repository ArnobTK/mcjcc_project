/**
 * 
 *  */
class doubleMap {
  protected leftMap: Map<any, any>;
  protected rightMap: Map<any, any>;
  constructor(map: Map<any, any>) {
    this.leftMap = map;
    this.rightMap = new Map();
    for (let key in this.leftMap) {
      let value = this.leftMap.get(key);
      this.rightMap.set(value, key);
    }
  }
  getLeftMap(): Map<any, any> {
    return this.leftMap;
  }
  getRightMap(): Map<any, any> {
    return this.rightMap;
  }
}
