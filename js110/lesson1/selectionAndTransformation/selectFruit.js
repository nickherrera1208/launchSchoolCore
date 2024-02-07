/* Let's look at an example with objects. In this example, we want to select the key-value pairs where the value is 'Fruit'.

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }*/

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produce) {
  let fruitObj = {};
  for (let [key, value] of Object.entries(produce)) {
    if (value === 'Fruit') {
      fruitObj[key] = value;
    }
  }
  return fruitObj;
}

console.log(selectFruit(produce));

/* LS Answer 

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
} */