function SpawnPlayerDefaultBullet(player){
  let bullet = add([
    rect(10,10),
    anchor("center"),
    pos(player.pos),
    area(),
    move(UP,300),
    offscreen({destroy:true, distance:50}),
    health(1),
    "bullet"
  ])
  
  bullet.on("death", function(){
    bullet.destroy()
  })
  
}