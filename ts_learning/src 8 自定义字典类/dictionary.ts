export type CallBack<K, V> = (key: K, val: V) => void;
// export interface CallBack<K, V> {
//   (key: K, val: V): void;
// }
export class Dictionary<K, V> {
  private keys: K[] = [];
  private vals: V[] = [];

  constructor() {}

  get size() {
    return this.keys.length;
  }

  set(key: K, val: V) {
    const index = this.getIndex(key);
    if (index === -1) {
      this.keys.push(key);
      this.vals.push(val);
    } else {
      this.vals[index] = val;
    }
  }

  get(key: K): V | null {
    const index = this.getIndex(key);
    if (index) {
      return this.vals[index];
    } else {
      return null;
    }
  }

  has(key: K) {
    const index = this.getIndex(key);
    return index !== -1;
  }

  clear() {
    this.keys = [];
    this.vals = [];
  }

  remove(key: K) {
    const index = this.getIndex(key);
    if (index !== -1) {
      this.keys.splice(index, 1);
      this.vals.splice(index, 1);
    }
  }

  forEach(callback: CallBack<K, V>) {
    this.keys.forEach((k, i) => {
      const v = this.vals[i];
      callback(k, v);
    });
  }

  private getIndex(key: K) {
    return this.keys.indexOf(key);
  }
}

let dic = new Dictionary();
