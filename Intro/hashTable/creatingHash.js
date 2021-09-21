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
  } //O(1);

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } //O(1)

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
  } //O(1)

  keys() {
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        console.log(this.data[i]);

        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  } //O(1)
}

let hash = new hashTable(10);
// console.log(hash._hash("vishal"));
hash.set("name", "vishal");
hash.set("name", "Sourav");
hash.set("company", "codedrill");
hash.set("age", "45");
// console.log(hash.set("position", "web dev"));
hash.keys();
// console.log(hash)
