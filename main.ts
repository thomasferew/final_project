let mySprite: Sprite = null
function mysprite () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d b d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . d d d b d d d . . . . . 
. . . . d d d d d d d . . . . . 
. . . . d . d d d . d . . . . . 
. . . . d . d d d . d . . . . . 
. . . . . . d d d . . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . . c c c c c . . . . . . 
`, SpriteKind.Player)
}
