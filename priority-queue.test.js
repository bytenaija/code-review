const PriorityQueue = require('./priority-queue')

describe("priority-queue", () => {
    it("Returns empty on first initialisation", () => {
        const priorityQ = new PriorityQueue();
        expect(priorityQ.length()).toBe(0)
    })

    it("Returns the correct size when elements are added", () => {
        const priorityQ = new PriorityQueue();
        expect(priorityQ.length()).toBe(0)
        priorityQ.add(2, 4)
        expect(priorityQ.length()).toBe(1)
        priorityQ.add(3, 1)
        expect(priorityQ.length()).toBe(2)
    })

    it("throws an error when priority is not provided", () => {
        const priorityQ = new PriorityQueue();
        expect(() => priorityQ.add(2)).toThrow('priority must be an integer (higher value has higher priority)');
        expect(priorityQ.length()).toBe(0)
    })

    it("returns the right value", () => {
        const priorityQ = new PriorityQueue();
        priorityQ.add(2, 1)
        priorityQ.add(4, 1)
        priorityQ.add(5, 2)
        priorityQ.add(10, 3)
        priorityQ.add(20, 10)
        priorityQ.add(40, 5)
        let value = priorityQ.Pop()
        expect(value).toBe(20)
        expect(priorityQ.length()).toBe(5)
        let value2 = priorityQ.Pop();
        expect(value2).toBe(40)
        expect(priorityQ.length()).toBe(4)
    })

    it("returns the all the  priorities", () => {
        const priorityQ = new PriorityQueue();
        priorityQ.add(2, 1)
        priorityQ.add(4, 1)
        priorityQ.add(5, 2)
        priorityQ.add(10, 3)
        priorityQ.add(20, 10)
        priorityQ.add(40, 5)
        expect(priorityQ.get_all_priorities()).toEqual(["1", "2", "3", "5", "10"])
    })

    it("iterates through all the queue elements in priority-then-FIFO order", () => {
        const priorityQ = new PriorityQueue();
        let results = []
        priorityQ.add(2, 1)
        priorityQ.add(4, 1)
        priorityQ.add(5, 2)
        priorityQ.add(10, 3)
        priorityQ.add(20, 10)
        priorityQ.add(40, 5)
        priorityQ.forEach((element) => {
            results.push(element)
        });

        expect(results).toEqual([20, 40, 10, 5, 2, 4])
    })

    it("changes the priority of an element", () => {
        const priorityQ = new PriorityQueue();
        priorityQ.add(2, 1)
        priorityQ.add(4, 1)
        priorityQ.add(5, 2)
        priorityQ.add(10, 3)
        priorityQ.add(20, 10)
        priorityQ.add(40, 5)
        let result1 = priorityQ.changePriority(10, 2)
        expect(result1).toBe(true)
        expect(priorityQ.store).toEqual({ "1": [2, 4], "10": [20], "2": [5, 10], "5": [40] })
        let result2 = priorityQ.changePriority(0, 2)
        expect(result2).toBe(false)
    })


})