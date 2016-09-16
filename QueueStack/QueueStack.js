let Stack = function() {
   const storage = []
   this.push = value => storage.push(value)
   this.pop = () => storage.pop()
   this.size = () => storage.length
   this.shift = () => storage.shift()
}
let StackOBJ = function() {
   let storage = {}
   let count = 0

   this.push = value => {
      storage[count] = value
      count++
      return value
   }
   this.pop = () => {
      if (count > 0) {
         count--
         let value = storage[count]
         delete storage[count]
         return value
      }
   }
   this.size = () => count
}
let Queue = function() {
   let inbox = new Stack()
   let outbox = new Stack()

   this.enqueue = value => inbox.push(value)
   this.size = () => inbox.size()
   this.dequeue = () => {
      let item = inbox.shift()
      outbox.push(item)
      return item
   }
}
