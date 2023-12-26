(() => {
  BlockEvents.rightClicked(event => {
    if(event.block.getId() == "twilightforest:uncrafting_table"){
      event.cancel();
    }
  })
})()
