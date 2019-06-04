## Code Review Results (By Everistus Olumese)


### PriorityQueue - General Comments
1. Size is declared but not used anywhere
2. Unit test are not implemented. You can use jest or mocha to implement unit test. I have added some unit tests you can follow to implement yours. If you have issues, please let me know and I'd be happy to pair program with you.
3. Use tools like JShint or Eslint to help you format the code. 
4. Please do not mix camelcase and snake_case. Try and stick withe camelCase please.
5. Export the function from the file so that it can be used as a module.

### `PriorityQueue.add()`
1. It should throw an error when priority is not supplied during an add operation.
2. It should throw an error when a value is not supplied during an add operation.


### `PriorityQueue.Pop()`
  1. maxKey is not defined so it will throw an error. You can define it by using `let maxKey = Math.max(Object.keys(this.store));`.
  2. `Math.max` is returning `NaN` on arrays with strings. I am not sure it is supposed to, but it is weird I am getting that error. You can use `Math.max.apply(Math, Object.keys(this.store))`.
  3. When you remove the value in a `pop()` operation check to see if there is an element left in the array, if not remove that entry.
  4. Rename Pop to use camelcase -> `pop()`.


### `PriorityQueue.forEach()`
1. PriorityQueue.forEach assumes that priorities are serial and consecutive. There is no where it is enforced that it must be serial and consecutive, so this will likely cause an error to throw.
2. PriorityQueue.forEach: Array sort doesn't work as expected with numbers. You need to implement a custom sort function.

### `PriorityQueue.changePriority()`
1. Using forEach on a map will throw an error. You can use `for..in` instead
2. `bucket` is a string and not an array. So you cannot do a `forEach` operation on `bucket`.
3. Changing an item priority should return true if an item is found.  You can also just `return foundItem`.
4. The context of `this` changes in an inner function. Either use an arrow function or assign `this` to a different variable before use.
5. Check if there is any element left in the array at that priority after the priority of the item has changed; if not remove it from the store.


#### If you need any further help, don't fail to let me know. Remember, it is my job to make sure you succeed in this role.


