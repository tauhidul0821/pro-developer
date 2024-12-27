// var addTwoNumbers = function(l1, l2) {
//     let newArr = [];
//     let carry = 0;
//     for(let i=0; i<l1.length; i++){
//         let temp = l2[i];
//         if(l2[i] === undefined){
//             temp = 0;
//         }

//         let sum = l1[i]+ temp;
        
//         if (carry>0) {
//             sum+= carry;
//         }

//         carry = Math.floor(sum / 10);

//         if (carry>0) {
//             sum = sum % 10;
//         }else{
//             //carry = 0;
//             sum = sum+carry;
//         }

//         newArr.push(sum);
//     }
//     return newArr;
// };

// const a = [2,9,5,6,9,2,4];
// const b = [3,9,9,9];
// const l1 = [9,9,9,9,9,9,9];
// const l2 = [9,9,9,9]
// //-------------------
//   //        8,9,9,9,0,0,0,1

// const res = addTwoNumbers(l1, l2);
// console.log(res);




class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;   // Value of the node
        this.next = next; // Pointer to the next node
    }
}

// Function to create a linked list from an array
function arrayToListNode(arr) {
    let dummy = new ListNode(); // Create a dummy node to simplify list creation
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val); // Create a new node and link it
        current = current.next;
    }
    return dummy.next; // Return the head of the linked list
}

// Example usage:
let list = arrayToListNode([1, 2, 3]); // Converts [1, 2, 3] to a linked list
console.log(list); // Outputs the linked list structure

