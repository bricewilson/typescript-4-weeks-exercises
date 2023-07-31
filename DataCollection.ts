export class DataCollection<T> {

  items: T[] = [];
	
  addItemToCollection(newItem: T): void {
    this.items.push(newItem);
  }

}

let data = new DataCollection<string>();
data.addItemToCollection('apple');
data.addItemToCollection('orange');
data.addItemToCollection('pear');
console.log(data);
