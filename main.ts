let mySprite: Sprite = null
forever(function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f e f f . . . . . 
        . . . . . . f f f e f . . . . . 
        . . . . . . f f f e f . . . . . 
        . . . . . . f f e f f . . . . . 
        . . . . . f f f e f . . . . . . 
        . . . . . f e f e f . . . . . . 
        . . . f f f e f f f f f . . . . 
        . . . f e e f f e e f f . . . . 
        . . . f e e f e e e e f . . . . 
        . . . f f e f f e e e f . . . . 
        . . . . f f f f f e e f . . . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
