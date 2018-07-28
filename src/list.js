// @flow

type Node<T> = {
  value: T,
  next: Node<T> | null
}

const createNode = <T>(v: T): Node<T> => ({
  value: v,
  next: null
})

export class LinkedList<T> {
  head: Node<T> | null = null
  last: Node<T> | null = null

  push (v: T) {
    const { last } = this
    if (this.head === null) this.last = this.head = createNode(v)
    else if (last !== null) this.last = last.next = createNode(v)
  }

  unshift (v: T) {
    const { head } = this
    const node = createNode(v)
    if (head === null) this.last = this.head = node
    else {
      node.next = head
      this.head = node
    }
  }

  shift (): T | null {
    const { head, last } = this
    if (head === null) return null
    this.head = head.next
    return head.value
  }
}
