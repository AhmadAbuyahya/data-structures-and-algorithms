# Trees
Implementation of the Trees data structure in Javascript 
## Challenge
using recursive function for traversing and inserting in bi search trees 

## Approach & Efficiency
approach: recursion
Efficiency:
space: O(h) for all methods where h is the height of the tree
time: O(n) for all methods where n is the number of nodes

## API
### Binary Trees
.preOrder(): traverses the tree using preOrder method and returns an array of the values .
.inOrder(): traverses the tree using inOrder method and returns an array of the values .
.postOrder(): traverses the tree using postOrder method and returns an array of the values .

### Binary search Trees
all of above +
.insert(value): adds a node to the tree with the correct order.
.contains(value): returns true if the value exists in the tree and false otherwise.
.findMax(vale): returns the highest value in the tree
.findMin(vale): returns the lowest value in the tree