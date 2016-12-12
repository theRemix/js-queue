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
 * @private {number} _start                Default value should be set 0.
 * @private {number} _end                  Default value should be set 0.
 */
class Queue{

  constructor(){
    this._storage = {};
    this._start = 0;
    this._end = 0;
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
    return this._end - this._start;
  }

  /**
   * Queue Class Method => enqueue(item)
   * -----------------------------
   * Puts an item in the queue.
   *
   * @name enqueue
   * @param item
   */
  enqueue(item){
    this._storage[this._end++] = item;
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
    return this.size() > 0 ?
      this._storage[this._start++] :
      null;
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
    return this._storage[this._start];
  }
}

module.exports = Queue;
