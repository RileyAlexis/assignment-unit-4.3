console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;
let basketIsFull = false;

function isFull() {
    if (basket.length>=5) return true;
    else return false;
}

/**
 * 
 * @param {string} item 
 */

function addItem(item){
if (isFull()) return false;
else 
{basket.push(item); return true;}
}

function listItems() {
    for (i in basket) console.log(basket[i]);
}

/**
 * 
 * @param {string} item 
 */

function removeItem(item) {
const index = basket.indexOf(item);
let removedItem ='';

if (index> -1) {removedItem = basket.splice(index,1)}
else return null;
return removedItem;
}

function empty() {
    return basket = [];
    
}

console.log('Adding Item(expect true)', addItem('ice cream'));
console.log('Adding Item(expect true)', addItem('cheesecake'));
console.log('Adding Item(expect true)', addItem('donuts'));
console.log('Adding Item(expect true)', addItem('danishes'));
console.log('Adding Item(expect true)', addItem('chocolate bar'));
console.log('Adding Item(expect true)', addItem('licorice'));
console.log('Remove Item(return that item if found)', removeItem('ice cream'));
console.log('Remove non-existent item', removeItem('somethingsomething'));
console.log(basket);

console.log('List All Items', listItems());

//console.log('Empty Cart', empty());
console.log('List Items in Cart(expect undefined', listItems());




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
