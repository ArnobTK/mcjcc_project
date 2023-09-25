/**
 * 
 *  */
export class mirrorMap {
  leftMap: Map<any, any>;
  rightMap: Map<any, any>;
  constructor(map: Map<any, any>) {
    this.leftMap = map;
    this.rightMap = new Map();
    for (let key in this.leftMap) {
      let value = this.leftMap.get(key);
      this.rightMap.set(value, key);
    }
  }
 }
