ServerEvents.recipes(event => {

    event.remove({output:'fluxnetworks:flux_core'})

    event.shaped(Item.of('fluxnetworks:flux_core',4),[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'fluxnetworks:flux_dust',
        B:'ae2:smooth_sky_stone_block',
        C:'ae2:singularity'
    })

    event.remove({output:'fluxnetworks:flux_block'})

    event.shaped(Item.of('fluxnetworks:flux_block'),[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'fluxnetworks:flux_dust',
        B:'fluxnetworks:flux_core',
        C:'gtceu:iv_machine_hull'
    })
    
})