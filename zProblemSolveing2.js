// var addTwoNumbers = function (l1, l2) {
//     // Initialise a new ListNode to be returned
//     var newListNode = new ListNode(0);
//     var headOfNewListNode = newListNode;

//     // Initialise variables to be utilised on each run
//     var sum = 0;
//     var carry = 0;

//     // While there are elements (or a carried number) to add
//     while (l1 !== null || l2 !== null || sum > 0) {
//         // If there's an element in l1 to be added, add it to the sum and move to the next l1 node
//         if (l1 !== null) {
//             sum = sum + l1.val;
//             l1 = l1.next;
//         }

//         // If there's an element in l2 to be added, add it to the sum and move to the next l2 node
//         if (l2 !== null) {
//             sum = sum + l2.val;
//             l2 = l2.next;
//         }

//         // Check if the sum for these nodes exceeds 10
//         if (sum >= 10) {
//             carry = 1;
//             sum = sum - 10;
//         }

//         // Add the sum to the new ListNode, and then move it to the next entry
//         headOfNewListNode.next = new ListNode(sum);
//         headOfNewListNode = headOfNewListNode.next;

//         // Set the sum for the next addition to equal the carry-over (if there was one)
//         sum = carry;
//         carry = 0;
//     }

//     // Return the constructed ListNode (ignoring the first dummy entry)
//     return newListNode.next;
// };

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }


// var newListNode = new ListNode(2);
// var headOfNewListNode = newListNode;



// headOfNewListNode.next = new ListNode(3);
// headOfNewListNode = headOfNewListNode.next;

// headOfNewListNode.next = new ListNode(4);
// headOfNewListNode = headOfNewListNode.next;



// console.log(newListNode);

// class ListNode {
//     constructor(val, next = null) {
//       this.val = val;   // The value of the node
//       this.next = next; // Reference to the next node (or null if there is no next node)
//     }
//   }
  
//   // Create nodes
//   const node1 = new ListNode(1);          // Node with value 1
//   const node2 = new ListNode(2);          // Node with value 2
//   const node3 = new ListNode(3);          // Node with value 2
//   node1.next = node2;                     // Link node1 to node2
//   node2.next = node3;                     // Link node1 to node2
  
//   // Print nodes to the console
//   console.log(node1); // Output: ListNode { val: 1, next: ListNode { val: 2, next: null } }
//   //console.log(node2); // Output: ListNode { val: 2, next: null }
  

//   console.log(node2); 
//   console.log(node3); 



const s = "abc", t = "abchbgdc"
//Output: true
//Example 2:

let sd = "axc", td = "ahbgdc"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function(s, t) {
//   let i = 0; j = 0;
//   while (i<) {
    
//   }

// };

// const res = isSubsequence(sd,td)
// console.log(res);











