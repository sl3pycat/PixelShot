function SpawnLifePointMax(target){
  let point = add([
    text("HPX"),
    pos(target.pos),
    color("#ff0000"),
    move(DOWN, 200),
    anchor("center"),
    area(),
    offscreen({destroy:true, distance:50}),
    "power",
    "hp"
  ])
  
  point.onCollide("player", function(player){
    point.destroy()
    player.heal(100)
  })
}