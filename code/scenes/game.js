scene("game", function StartGame(){
  SpawnPlayer()
  
  let level_manager = add([
    timer(),
    { score:0,
      level:0},
    "levelmanager"
  ])
  
  level_manager.loop(1, function(){
    level_manager.score++
    level_manager.level+=0.1
    
    SpawnAsteroid()
  })
  
})

go("game")//TODO: start game from main menu