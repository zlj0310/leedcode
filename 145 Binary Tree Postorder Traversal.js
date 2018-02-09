/**
    TODO
    Given a binary tree, return the postorder traversal of its nodes' values.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var result = [];
    var stack = [];
    var prev = null;
    var curr = null;
    
    if(root === null) {
        return result;
    }
    
    stack.push(root);
    
    while(stack.length !== 0) {
        curr = stack[stack.length - 1];
        
        if(prev === null || prev.left === curr || prev.right === curr) { // traverse down the tree
            if(curr.left !== null) {
                stack.push(curr.left);
            } else if(curr.right !== null) {
                stack.push(curr.right);
            }
        } else if(curr.left === prev) {
            if(curr.right !== null) {
                stack.push(curr.right);
            }
        } else {
            result.push(curr.val);
            stack.pop();
        }
        prev = curr;
    }
    return result;
};