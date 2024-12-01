scene("game", function StartGame(){
  SpawnPlayer()//adds the player to the game
  StartPlayerBullets()//start the manager for player bullets
  
  let level_manager = add([
    timer(),
    { score:0,
      level:0},
    "levelmanager"
  ])
  
  level_manager.loop(1, function(){
    
    level_manager.score++//increases the score by one every second
    level_manager.level+=0.1//increases the level every ten seconds
    
    SpawnAsteroid()//spawns an asteroid every second
    
  })
  
})

go("game")//TODO: start game from main menu