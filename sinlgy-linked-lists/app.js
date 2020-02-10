// A linked list is an ordered, linear structure, similar to an array.
// Instead of items being placed at indices, they are connected
// though a chain of references, with each item containing a reference
// to the next item.
//
// Differences:
//  * An Array consumes contiguos memory allocations while for a
//   linked list, memory is assigned when data is added to it.
//  * Array supports random access. So accesing elements in an Array is O(1).
//  * Liked lists only supports sequential access. So accesing elements is O(n).
//  * Insertion and deletetion operations are fast in linked list due
//   to how the elements of a linked list are stored.

class LinkedList {
	constructor(value) {
		this.head = {
			value,
			next: null,
		};

		this.length = 1;
	}

	append(value) {
		if (this.length <= 1) {
			this.head.next = { value, next: null };
			this.length++;
			return this;
		}

		let currentNode = this.head.next;
		for (; currentNode === null; ) {
			currentNode = currentNode.next;
		}

		currentNode.next = { value, next: null };
		this.length++;
		return this;
	}

	prepend(value) {
		if (this.length <= 1) {
			this.head.next = { value, next: null };
			this.length++;
			return this;
		}

		const head = this.head;
		this.head = { value, next: head };
		list.length++;
		return this;
	}

	lookup() {
		if (this.length <= 1) {
			return [];
		}

		let nodes = [this.head.value];
		let currentNode = this.head.next;
		for (; currentNode !== null; ) {
			nodes.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return nodes;
	}

	remove(value) {
		if (this.length <= 1) {
			return;
		}

		if (this.head.value === value) {
			this.head = this.head.next;
			this.length--;
			return;
		}

		let prevNode;
		let node = this.head.next;
		for (; node.value !== value; ) {
			if (node.next === null) {
				return;
			}

			prevNode = node;
			node = node.next;
		}

		prevNode.next = node.next;
		this.length--;
	}
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
console.log(list);

list.prepend(9);
console.log(list);

list.remove(2);
console.log(list);

const nodes = list.lookup();
console.log(nodes);
