// https://leetcode.com/problems/add-two-numbers/description/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let list = new ListNode(-1);
    let current: ListNode = list;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0){
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return list.next;
};

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}