
function StartPlayerBullets(){
  let player = get("player")[0]
  let manager = add([
    timer(),
    {type: "default"}
  ])
  
  manager.loop(0.7, function(){
    SpawnPlayerDefaultBullet(player)
  })
}