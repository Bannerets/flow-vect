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
  tail: Node<T> | null = null

  push (v: T) {
    const { tail } = this
    if (this.head === null) this.tail = this.head = createNode(v)
    else if (tail !== null) this.tail = tail.next = createNode(v)
  }

  unshift (): T | null {
    const { head, tail } = this
    if (head === null) return null
    this.head = head.next
    return head.value
  }
}
