import primaScena from "./primaScena.js"
let config = {
    width: 1880,
    height: 850,
    parent: 'Scena',
    backgroundColor: 0xCCFFFF,
    physics:{
        default:"arcade",
        arcade:{gravity:{y:400},debug:false},
        
    },
    scene: [primaScena]
 };
 let game = new Phaser.Game(config);
