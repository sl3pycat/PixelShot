function SpawnPlayer(){
  let player = add([
    rect(40,40),
    color("#ffffff"),
    anchor("center"),
    pos(center()),
    health(100),
    area(),
    "player"
  ])
  
  player.onUpdate(function(){
    
    if(isMouseDown()){player.pos = lerp(player.pos, vec2(mousePos().x, mousePos().y-100), 4.5*dt())}//make the player follow the users finger and stay 100px above
  })
}