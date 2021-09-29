class Scene9 extends Phaser.Scene {
    constructor() {
      super('pharmacy');
    }

    preload() {

      this.load.image('map', 'assets/farm/map.png')
      this.load.image('mos', 'assets/farm/mostrador.png')
      this.load.image('es', 'assets/farm/estante.png')
      this.load.image('bal', 'assets/farm/balanza.png')
      this.load.image('fdude', 'assets/farm/farmaceutico.png')
      this.load.image('txt12', 'assets/txt/txt12.png')
      this.load.audio ('Linea8', 'assets/sounds/AUDIO INTRO 2/Linea_8.mp3');
      this.load.spritesheet('playerx', 'assets/playerx.png', { frameWidth: 40, frameHeight: 40});
    }

    create() {

      this.anims.create({

        key: 'leftx',

        frames: this.anims.generateFrameNumbers('playerx', { start: 0, end: 1 }),

        frameRate: 10,

        repeat: -1

    });

    this.anims.create({

        key: 'frontx',

        frames: this.anims.generateFrameNumbers('playerx', { start: 2, end: 4 }),

        frameRate: 10,

        repeat: -1 

    });

    this.anims.create({

        key: 'rightx',

        frames: this.anims.generateFrameNumbers('playerx', { start: 8, end: 9 }),

        frameRate: 10,

        repeat: -1

    });

    this.anims.create({

        key: 'backx',

        frames: this.anims.generateFrameNumbers('playerx', { start: 5, end: 7 }),

        frameRate: 10,

        repeat: -1

    });

    this.anims.create({

        key: 'stillx',

        frames: [ { key: 'playerx', frame: 4 } ],

        frameRate: 20, 

        //repeat: 0

    });

      // Cámara

      camera = this.cameras.main; 
      
      this.cameras.main.setBounds(0, 0, 912, 500)

      // Fondo 

      this.add.image(456, 250, 'map')

      // Player 

      player = this.physics.add.sprite(456, 470, 'stillx');

      player.setScale(1.2)

      this.physics.add.collider(player, colliders);

      if (cursors =! undefined){
          
          cursors = this.input.keyboard.createCursorKeys();
      }
      
      // Colliders

      var colliders = this.physics.add.staticGroup();

      this.physics.add.collider(player, colliders)

      colliders.create(100, 250, 'mos')

      colliders.create(400, 150, 'es')

      colliders.create(600, 150, 'es')

      colliders.create(800, 150, 'es')

      colliders.create(570, 460, 'bal')

      colliders.create(400, 300, 'es')

      colliders.create(600, 300, 'es')

      colliders.create(800, 300, 'es')

      // Hablar con el señor 

      var senorfar = this.physics.add.staticGroup()

      senorfar.create(180, 150, 'fdude')

      this.physics.add.overlap(player, senorfar, this.farmint, null, this);
      
    }

    update() {

      camera.centerOn(player.x, player.y);

      if (gameOver) {      

          return

      }
      
      if (cursors.left.isDown) {

          player.setVelocityX(-90);

          player.anims.play('leftx', true);

      }

      else if (cursors.right.isDown) {

          player.setVelocityX(90);

          player.anims.play('rightx', true);

      }

      else if (cursors.up.isDown) {

          player.setVelocityY(-90);

          player.anims.play('backx', true);

      }

      else if (cursors.down.isDown) {

          player.setVelocityY(90);

          player.anims.play('frontx', true);

      }

      else {

          player.setVelocityX(0);

          player.setVelocityY(0);

          player.anims.play('stillx', true);

      }
  }

  farmint() {

    this.physics.pause(); 

        instructions1 = this.add.image(400, 250, 'txt12') ; 

        instructions1.scrollFactorX = 0 
    
        instructions1.scrollFactorY = 0 

        instructions1.setInteractive() && this.sound.play('Linea8'); 

        instructions1.on('pointerdown', () => this.scene.start('inicio'))

  }
}
