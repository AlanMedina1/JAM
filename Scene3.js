class Scene3 extends Phaser.Scene {
    constructor() {
      super('intro');
    }

    preload () {

      this.load.image('one', 'assets/one.png');
      this.load.image('two', 'assets/two.png');

    }


    create () {

      intro = this.add.image(800, 450, 'fondo'); 

      intro.setInteractive();

      intro.on('pointerdown', () => this.empieza() );
        
    }

    empieza() {

      first = this.add.image(800, 450, 'one');

      first.scrollFactorX = 0

      first.scrollFactorY = 0

      first.setInteractive();

      first.on('pointerdown', () => this.two() );

      //first.on('pointerdown', () => this.scene.start('nivel1') );

    }

    two() {

      var second = this.add.image(800, 450, 'two'); 

      second.setInteractive();

      second.on('pointerdown', () => this.scene.start('nivel1'))

    }
}