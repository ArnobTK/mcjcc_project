"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mirrorMap = void 0;
/**
 *
 *  */
class mirrorMap {
    constructor(map) {
        this.leftMap = map;
        this.rightMap = new Map();
        for (let key in this.leftMap) {
            let value = this.leftMap.get(key);
            this.rightMap.set(value, key);
        }
    }
}
exports.mirrorMap = mirrorMap;
