
function calculateLeftoverBlocks(numberOfBlocks) {
  let layers = [];
  let blocksRequired = 1;
  let layerNum = 1;

  while (blocksRequired <= numberOfBlocks) {
    layers.push([blocksRequired]);
    layerNum += 1;
    numberOfBlocks -= blocksRequired;
    blocksRequired = layerNum ** 2;
  }
  let leftoverBlocks = numberOfBlocks;

  return leftoverBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true -->

// console.log(calculateLeftoverBlocks(0)); 
// console.log(calculateLeftoverBlocks(1)); 
// console.log(calculateLeftoverBlocks(2)); 
// console.log(calculateLeftoverBlocks(4)); 
// console.log(calculateLeftoverBlocks(5)); 
// console.log(calculateLeftoverBlocks(6)); 
// console.log(calculateLeftoverBlocks(14));