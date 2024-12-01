function SpawnAsteroid(){
  let asteroid = add([
    rect(35,35),
    area(),
    pos(rand(30,width()-30), -30),
    anchor("center"),
    move(DOWN, 100),
    offscreen({destroy:true, distance:40}),
    "asteroid"
  ])
  
  asteroid.onCollide("player", function(player){
    asteroid.destroy()
    player.hurt(10)
    shake(5)
  })
}