/**
 * Queue => Stack
 * -----------------------------
 * Queue a stack data structure.
 *
 * A queue is a data structure in which the first element is inserted from one end called
 * REAR (also called tail), and the deletion of existing element takes place from the other
 * end called as FRONT (also called head).  This makes queue a FIFO (first in first out), or
 * the element that is inserted first will always be the first to be removed.
 *
 * @private {object} _storage              Default value should be an empty object.
 * @private {number} _front                Default value should be set null.
 * @private {number} _back                 Default value should be set null.
 */
class Queue{

  constructor(){
    this._storage = {};
    this._front = null;
    this._back = null;
  }

  /**
   * Queue Class Method => size()
   * -----------------------------
   * Returns the size of the stack.
   *
   * @name size
   * @return {Number}
   */
  size(){
    let length = 0;
    let curNode = this._front;
    while( curNode ){
      length++;
      curNode = curNode.next;
    }
    return length;
  }

  /**
   * Queue Class Method => enqueue(item)
   * -----------------------------
   * Puts an item in the queue.
   *
   * @name enqueue
   * @param value
   */
  enqueue(value){
    let newNode = {
      value,
      next: null,
    };
    if (!this._front) {
      this._back = newNode;
      this._front = this._back;
    } else {
      this._back.next = newNode;
      this._back = newNode;
    }
  }

  /**
   * Queue Class Method => dequeue()
   * -----------------------------
   * Takes an item off the queue and returns it.
   *
   * @name dequeue
   * @return {Object}   Note that everything in javascript is an Object.
   */
  dequeue(){
    if ( this._front ) {
      let value = this._front.value;
      this._front = this._front.next;
      return value;
    }
    return null;
  }

   /**
   * Queue Class Method => peek()
   * -----------------------------
   * Returns the value of the first element without dequeueing.
   *
   * @name peek
   * @return {Object}   Note that everything in javascript is an Object.
   */
  peek(){
    return this._front ? this._front.value : null;
  }
}

module.exports = Queue;
