ServerEvents.recipes(event => {

    event.remove('ars_nouveau:warp_scroll')

    event.shaped('ars_nouveau:warp_scroll',[
        'ADA',
        'BCB',
        'AEA'
    ],{
        A:'ars_nouveau:source_gem',
        B:'minecraft:lapis_lazuli',
        C:'ars_nouveau:blank_parchment',
        D:'bloodmagic:etherealslate',
        E:'ars_nouveau:wilden_tribute'
    })
    
})