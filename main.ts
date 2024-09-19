namespace SpriteKind {
    export const Curseur = SpriteKind.create()
    export const noirplayer = SpriteKind.create()
}
function PionBleu () {
    Pion1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pion2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pion3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pion4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pion5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pion6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pion7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pion8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . . 6 8 8 8 8 6 . . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(Pion1, tiles.getTileLocation(1, 2))
    tiles.placeOnTile(Pion2, tiles.getTileLocation(2, 2))
    tiles.placeOnTile(Pion3, tiles.getTileLocation(3, 2))
    tiles.placeOnTile(Pion4, tiles.getTileLocation(4, 2))
    tiles.placeOnTile(Pion5, tiles.getTileLocation(5, 2))
    tiles.placeOnTile(Pion6, tiles.getTileLocation(6, 2))
    tiles.placeOnTile(Pion7, tiles.getTileLocation(7, 2))
    tiles.placeOnTile(Pion8, tiles.getTileLocation(8, 2))
    Tour1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 . 6 6 . 6 6 . . . . 
        . . . . 6 6 . 6 6 . 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tour2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 . 6 6 . 6 6 . . . . 
        . . . . 6 6 . 6 6 . 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Cheval1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 6 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 6 6 . . . . 
        . . . . 6 8 8 8 8 6 6 . . . . . 
        . . . . 6 8 8 8 8 6 . . . . . . 
        . . . . 6 8 8 8 8 6 . . . . . . 
        . . . . 6 8 8 8 8 6 . . . . . . 
        . . 6 6 6 8 8 8 8 6 6 6 . . . . 
        . . 6 8 8 8 8 8 8 8 8 6 . . . . 
        . . 6 8 8 8 8 8 8 8 8 6 . . . . 
        . . 6 8 8 8 8 8 8 8 8 6 . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Cheval2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 6 8 6 . . . . 
        . . . . 6 8 8 8 8 8 8 6 . . . . 
        . . . . 6 8 8 8 8 8 6 6 . . . . 
        . . . . 6 8 8 8 8 6 6 . . . . . 
        . . . . 6 8 8 8 8 6 . . . . . . 
        . . . . 6 8 8 8 8 6 . . . . . . 
        . . . . 6 8 8 8 8 6 . . . . . . 
        . . 6 6 6 8 8 8 8 6 6 6 . . . . 
        . . 6 8 8 8 8 8 8 8 8 6 . . . . 
        . . 6 8 8 8 8 8 8 8 8 6 . . . . 
        . . 6 8 8 8 8 8 8 8 8 6 . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(Tour1, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(tour2, tiles.getTileLocation(8, 1))
    tiles.placeOnTile(Cheval1, tiles.getTileLocation(2, 1))
    tiles.placeOnTile(Cheval2, tiles.getTileLocation(7, 1))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curseuringame.overlapsWith(Pion1)) {
        Pion1.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion2)) {
        Pion2.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion3)) {
        Pion3.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion4)) {
        Pion4.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion5)) {
        Pion5.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion6)) {
        Pion6.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion7)) {
        Pion7.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion8)) {
        Pion8.follow(curseuringame)
    }
    if (curseuringame.overlapsWith(Pion1N)) {
        Pion1N.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion2N)) {
        Pion2N.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion3N)) {
        Pion3N.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion4N)) {
        Pion4N.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion5N)) {
        Pion5N.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion6N)) {
        Pion6N.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion7N)) {
        Pion7N.follow(curseuringame)
    } else if (curseuringame.overlapsWith(Pion8N)) {
        Pion8N.follow(curseuringame)
    }
})
function PionRouge () {
    Pion1N = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.noirplayer)
    Pion2N = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.noirplayer)
    Pion3N = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.noirplayer)
    Pion4N = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.noirplayer)
    Pion5N = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.noirplayer)
    Pion6N = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.noirplayer)
    Pion7N = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.noirplayer)
    Pion8N = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . . 2 3 3 3 3 2 . . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . 2 3 3 3 3 3 3 2 . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.noirplayer)
    tiles.placeOnTile(Pion1N, tiles.getTileLocation(1, 7))
    tiles.placeOnTile(Pion2N, tiles.getTileLocation(2, 7))
    tiles.placeOnTile(Pion3N, tiles.getTileLocation(3, 7))
    tiles.placeOnTile(Pion4N, tiles.getTileLocation(4, 7))
    tiles.placeOnTile(Pion5N, tiles.getTileLocation(5, 7))
    tiles.placeOnTile(Pion6N, tiles.getTileLocation(6, 7))
    tiles.placeOnTile(Pion7N, tiles.getTileLocation(7, 7))
    tiles.placeOnTile(Pion8N, tiles.getTileLocation(8, 7))
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curseuringame.overlapsWith(Pion1)) {
        Pion1.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion2)) {
        Pion2.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion3)) {
        Pion3.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion4)) {
        Pion4.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion5)) {
        Pion5.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion6)) {
        Pion6.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion7)) {
        Pion7.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion8)) {
        Pion8.follow(curseuringame, 0)
    }
    if (curseuringame.overlapsWith(Pion1N)) {
        Pion1N.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion2N)) {
        Pion2N.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion3N)) {
        Pion3N.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion4N)) {
        Pion4N.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion5N)) {
        Pion5N.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion6N)) {
        Pion6N.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion7N)) {
        Pion7N.follow(curseuringame, 0)
    } else if (curseuringame.overlapsWith(Pion8N)) {
        Pion8N.follow(curseuringame, 0)
    }
})
let Pion8N: Sprite = null
let Pion7N: Sprite = null
let Pion6N: Sprite = null
let Pion5N: Sprite = null
let Pion4N: Sprite = null
let Pion3N: Sprite = null
let Pion2N: Sprite = null
let Pion1N: Sprite = null
let Cheval2: Sprite = null
let Cheval1: Sprite = null
let tour2: Sprite = null
let Tour1: Sprite = null
let Pion8: Sprite = null
let Pion7: Sprite = null
let Pion6: Sprite = null
let Pion5: Sprite = null
let Pion4: Sprite = null
let Pion3: Sprite = null
let Pion2: Sprite = null
let Pion1: Sprite = null
let curseuringame: Sprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 160
    export const ARCADE_SCREEN_HEIGHT = 160
}
tiles.setCurrentTilemap(tilemap`niveau2`)
curseuringame = sprites.create(img`
    a a a a a . . . . . . a a a a a 
    a . . . . . . . . . . . . . . a 
    a . . . . . . . . . . . . . . a 
    a . . . . . . . . . . . . . . a 
    a . . . . . . . . . . . . . . a 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . a a . . . . . . . 
    a . . . . . . . . . . . . . . a 
    a . . . . . . . . . . . . . . a 
    a . . . . . . . . . . . . . . a 
    a . . . . . . . . . . . . . . a 
    a a a a a . . . . . . a a a a a 
    `, SpriteKind.Curseur)
tiles.placeOnRandomTile(curseuringame, assets.tile`myTile`)
grid.moveWithButtons(curseuringame)
animation.runImageAnimation(
curseuringame,
assets.animation`curseur`,
1000,
true
)
PionBleu()
PionRouge()
