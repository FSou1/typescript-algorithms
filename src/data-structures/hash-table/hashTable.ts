export class HashTable {
  buckets: Array<Array<any>>;
  keys: {};

  constructor(bucketsLength: number = 32) {
    this.buckets = new Array<Array<any>>(bucketsLength);
    this.keys = {};
  }

  hash(key: string): number {
    return key
      .split("")
      .map((k) => k.charCodeAt(0))
      .reduce((a, b) => a + b, 0) % this.buckets.length;
  }

  set(key: string, value: any) {
    const hash = this.hash(key);
    if (this.has(key)) {
      for (var entry of this.buckets[hash]) {
        if (entry.key === key) {
          entry.value = value;
        }
      }
    } else {
      if (!this.buckets[hash]) {
        this.buckets[hash] = [];
      }
      this.buckets[hash].push({ key, value });
    }
    this.keys[key] = hash;
  }

  has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  get(key: string): any {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];
    return bucket?.find((v) => v.key === key)?.value;
  }

  delete(key: string) {
    if (!this.has(key)) {
      return null;
    }

    const hash = this.hash(key);
    delete this.keys[key];
    if (!this.buckets[hash]) {
      return null;
    }

    this.buckets[this.hash(key)] = [
      ...this.buckets[this.hash(key)].filter((pair) => pair.key != key),
    ];
  }

  getKeys(): string[] {
    return Object.keys(this.keys);
  }

  getValues(): any[] {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket.map((pair) => pair.value);
      return values.concat(bucketValues);
    }, []);
  }
}
