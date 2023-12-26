ServerEvents.tags('item', event => {

    event.add('forge:ingots/aluminum','gtceu:aluminium_ingot')
    event.add('forge:ingots/aluminium','immersiveengineering:ingot_aluminum')

})

ServerEvents.recipes(event => {

    event.remove('immersiveengineering:crafting/ingot_uranium_to_storage_uranium')

    event.shaped(Item.of('immersiveengineering:storage_uranium'),[
        'AAA',
        'AAA',
        'AAA'
    ],{
        A:'#forge:ingots/uranium'
    })
    
})