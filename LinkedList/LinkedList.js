// Instantiates a new list
// by setting the head and tail to a
// new node with the initial value
var LinkedList = function(initialValue) {
    this.head = this.tail = new Node(initialValue);
};

// Add a new value to the linked list
LinkedList.prototype.addToTail = function(val) {
    var node = new Node(val);
    if (this.head.value === null) {
        // The list isn't yet initialized ->
        // set head and tail values
        this.head = this.tail = node;
    } else {
        // First set the current tail's next
        // pointer to point to the new node
        this.tail.next = node;

        // Next have the tail point to the
        // new node
        this.tail = node;
    }
}

// Remove an element from the head of the list
LinkedList.prototype.removeHead = function() {
    if (this.head.next !== null) {
        // The list has elements other than head,
        // so remove the head and move the pointer
        this.head = this.head.next
    } else {
        // Either list is empty or head
        // is all that's left
        this.head = this.tail = null;
    }
}

// Determing if the linked list contains the target value
LinkedList.prototype.contains = function(val) {
    // Starting at the list head,
    // Keep going through next nodes until either
    // we've found the target val or we reach the end
    var node = this.head,
        found = false;
    while (node !== null) {
        if (node.value === val) {
            found = true;
            break;
        }
        node = node.next;
    }
    return found;
}

// Node class to store node value as well
// as next node pointer
var Node = function(val, next) {
    this.value = val || null;
    this.next = next || null;
}
