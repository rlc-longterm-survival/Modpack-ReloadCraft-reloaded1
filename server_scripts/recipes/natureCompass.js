ServerEvents.recipes(event => {

    event.remove({output:'naturescompass:naturescompass'})

    event.shaped(Item.of('naturescompass:naturescompass'),[
        'TAL',
        'BCD',
        'LET'
    ],{
        T:'#minecraft:saplings',
        L:'#minecraft:leaves',
        A:'immersiveengineering:component_electronic',
        B:'gtceu:lv_sensor',
        D:'gtceu:lv_emitter',
        E:'create:precision_mechanism',
        C:'minecraft:compass'
    })

    event.shaped(Item.of('naturescompass:naturescompass'),[
        'TAL',
        'BCD',
        'LET'
    ],{
        T:'#minecraft:saplings',
        L:'#minecraft:leaves',
        A:'naturesaura:eye',
        B:'bloodmagic:reinforcedslate',
        D:'ars_nouveau:manipulation_essence',
        E:'create:precision_mechanism',
        C:'minecraft:compass'
    })
    
})