class hashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const bucket = this.data[address];
    // console.log(bucket);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
      return undefined;
    }
  }
}

let hash = new hashTable(10);
// console.log(hash._hash("vishal"));
hash.set("name", "vishal");
hash.set("company", "codedrill");
hash.set("age", "45");
// console.log(hash.set("position", "web dev"));
console.log(hash.get("age"));
// console.log(hash)
