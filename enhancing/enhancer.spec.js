const enhancer = require('./enhancer.js');
// test away!

describe('Item can get repaired', () => {
    it('repairs an item', () => {
        const item = { name: 'Cool Tool', durability: 40, enhancement: 0}
        const repairedItem = enhancer.repair(item)
        expect(repairedItem.durability).toBe(100)
    })
})

describe('Item can get enhanced', () => {
    it('enhances an item', () => {
        const item = { name: 'Cool Tool', durability: 40, enhancement: 0}
        const enhancedItem = enhancer.success(item)
        expect(enhancedItem.enhancement).toBe(1)
        expect(enhancedItem.durability).toBe(40)
        const coolerItem = { name: 'Cooler Tool', durability: 100, enhancement: 20}
        const enhancedCoolerItem = enhancer.success(coolerItem)
        expect(enhancedCoolerItem.enhancement).toBe(20)
        expect(enhancedCoolerItem.durability).toBe(100)
    })
})

describe('Item fails to get enhanced properly', () => {
    it('fails to enhance an item properly', () => {
        const item = { name: 'Cool Tool', durability: 40, enhancement: 0}
        const nonEnhancedItem = enhancer.fail(item)
        expect(nonEnhancedItem.durability).toBe(35)
        const coolerItem = { name: 'Cooler Tool', durability: 100, enhancement: 20}
        const nonEnhancedCoolerItem = enhancer.fail(coolerItem)
        expect(nonEnhancedCoolerItem.durability).toBe(90)
        expect(nonEnhancedCoolerItem.enhancement).toBe(19)
    })
})