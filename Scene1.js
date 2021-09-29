class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload () {

      // Spritesheets 

      this.load.spritesheet('player', 'assets/player.png', { frameWidth: 40, frameHeight: 40});

      // imagenes 

      this.load.image('fondo', 'assets/test3.png'); 
      this.load.image('intro', 'assets/intro.png'); 
      this.load.image('credsb', 'assets/credsbut.png');
      this.load.image('playb', 'assets/playbutt.png');
      //this.load.image('player', 'assets/player.png');
      this.load.image('casa1', 'assets/casa1.png')
      this.load.image('casa2', 'assets/casa2.png')
      this.load.image('casa3', 'assets/casa3.png')
      this.load.image('casa4', 'assets/casa4.png')
      this.load.image('casa5', 'assets/casa5.png')
      this.load.image('casa6', 'assets/casa6.png')
      this.load.image('enter', 'assets/enter.png')
      this.load.image('key', 'assets/key.png')
      this.load.image('door', 'assets/door.png')
      this.load.image('tilesfondo1', 'assets/foreschi.png')
      this.load.image('ente', 'assets/ente.png')
      this.load.image('backg', 'assets/nivel1/bosque.png')

      // Hitboxes 

      this.load.image('thb', 'assets/hitboxes/tophitbox.png')
      this.load.image('cohb', 'assets/hitboxes/casa1hb.png')
      this.load.image('cdhb', 'assets/hitboxes/casa2hb.png')
      this.load.image('cthb', 'assets/hitboxes/casa3hb.png')
      this.load.image('cflhb', 'assets/hitboxes/casa4lhb.png')
      this.load.image('cfrhb', 'assets/hitboxes/casa4rhb.png')
      this.load.image('cchb', 'assets/hitboxes/casa5hb.png')
      this.load.image('cshb', 'assets/hitboxes/casa6hb.png')
      this.load.image('tree', 'assets/hitboxes/tree.png')
      this.load.image('treet', 'assets/hitboxes/treet.png')
      this.load.image('treed', 'assets/hitboxes/treed.png')
      this.load.image('exe', 'assets/hitboxes/exe.png')
      this.load.image('exe2', 'assets/hitboxes/exe2.png')
      this.load.image('exe3', 'assets/hitboxes/exe3.png')
      this.load.image('exe4', 'assets/hitboxes/exe4.png')
      this.load.image('exe5', 'assets/hitboxes/exe5.png')
      this.load.image('exe6', 'assets/hitboxes/exe6.png')

      // tilemap 

      this.load.tilemapTiledJSON('tilemap', 'assets/Main.json')

  }
    

    create() {

      this.anims.create({

        key: 'left',

        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),

        frameRate: 10,

        repeat: -1

      });

      this.anims.create({

        key: 'front',

        frames: this.anims.generateFrameNumbers('player', { start: 2, end: 4 }),

        frameRate: 10,

        repeat: -1 

      });

      this.anims.create({

        key: 'right',

        frames: this.anims.generateFrameNumbers('player', { start: 8, end: 9 }),

        frameRate: 10,

        repeat: -1

      });

      this.anims.create({

        key: 'back',

        frames: this.anims.generateFrameNumbers('player', { start: 5, end: 7 }),

        frameRate: 10,

        repeat: -1

      });

      this.anims.create({

        key: 'still',

        frames: [ { key: 'player', frame: 4 } ],

        frameRate: 20, 

        //repeat: 0

      });

      this.add.image(400, 250, 'intro');

      var start = this.add.image(580, 330, 'playb')

      start.setInteractive()

      start.on('pointerdown', () => this.scene.start('introduccion') );

      var creds = this.add.image(580, 400, 'credsb')

      creds.setInteractive()

      creds.on('pointerdown', () => this.scene.start('creditos'))
    }
}
