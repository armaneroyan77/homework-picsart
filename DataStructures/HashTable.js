function isPrime(n){
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function nextPrime(n){
  if (n < 2) return 2;

  let prime = n + 1;

  while (true) {
    if (isPrime(prime)) return prime;
    prime++;
  }
}

class HashTable {
  constructor(initialCapacity = 11, maxLoadFactor = 1.0){
    this.capacity = initialCapacity;
    this.maxLoadFactor = maxLoadFactor;
    this.size = 0;
    this.buffer = new Array(this.capacity).fill(null).map(() => []);
  }

  _hash(key){
    let hash = 0;
    const PRIME = 11;
    const string = String(key);

    for (let i = 0; i < string.length; i++) {
      hash = (hash * PRIME + string.charCodeAt(i)) % this.capacity;
    }

    return hash;
  }

  loadFactor(){
    return this.size / this.capacity;
  }

  has(key){
    const index = this._hash(key);
    const bucket = this.buffer[index];

    for (const [storedKey] of bucket) {
      if (storedKey === key) {
        return true;
      }
    }

    return false;
  }

  get(key){
    const index = this._hash(key);
    const bucket = this.buffer[index];

    for (const [storedKey, value] of bucket) {
      if (storedKey === key) {
        return value;
      }
    }

    return undefined;
  }

  set(key, value){
    const index = this._hash(key);
    const bucket = this.buffer[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return this;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.loadFactor() > this.maxLoadFactor) {
      this.resize();
    }

    return this;
  }

  getSize(){
    return this.size;
  }

  delete(key){
    const index = this._hash(key);
    const bucket = this.buffer[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  *keys(){
    for (const bucket of this.buffer) {
      for (const [key] of bucket) {
        yield key;
      }
    }
  }

  *values(){
    for (const bucket of this.buffer) {
      for (const [, value] of bucket) {
        yield value;
      }
    }
  }

  *entries(){
    for (const bucket of this.buffer) {
      for (const entry of bucket) {
        yield entry;
      }
    }
  }

  resize(){
    const oldEntries = [...this.entries()];

    this.capacity = nextPrime(this.capacity * 2);
    this.buffer = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    for (const [key, value] of oldEntries) {
      this.set(key, value);
    }
  }

  clear(){
    this.buffer = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  *[Symbol.iterator](){
    yield* this.entries();
  }
}

const hashTable = new HashTable;

hashTable.set("Anna", 23);
hashTable.set("Arman", 23);
hashTable.set("Artak", 23);

for(let [key, val] of hashTable.entries()){
  console.log(key, val);
}


