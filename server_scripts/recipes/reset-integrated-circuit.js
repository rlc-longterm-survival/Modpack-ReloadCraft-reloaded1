(() => {
  ServerEvents.recipes(event => {
    event.shapeless('integrated_circuit:integrated_circuit', [
      'integrated_circuit:integrated_circuit'
    ])
  })
})()
