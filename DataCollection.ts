export class DataCollection<T> {

  items: T[] = [];
	
  addItemToCollection(newItem: T): void {
    this.items.push(newItem);
  }

}

let stringData = new DataCollection<string>();
stringData.addItemToCollection('apple');
stringData.addItemToCollection('orange');
stringData.addItemToCollection('pear');
console.log(stringData);

let numberData = new DataCollection<number>();
numberData.addItemToCollection(2);
numberData.addItemToCollection(4);
numberData.addItemToCollection(6);
console.log(numberData);
