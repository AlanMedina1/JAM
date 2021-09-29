class  Scene10 extends Phaser.Scene {
    constructor() {
      super('introduccion');
    }

    preload() {

        this.load.image('radio', 'assets/radio.png')
        this.load.image('introbg', 'assets/introbg.png')
        this.load.image('txt13', 'assets/txt/txt13.png')
        this.load.image('txt14', 'assets/txt/txt14.png')
        this.load.image('txt15', 'assets/txt/txt15.png')
        this.load.image('txt16', 'assets/txt/txt16.png')
        this.load.image('txt17', 'assets/txt/txt17.png')
        this.load.image('txt18', 'assets/txt/txt18.png')
        this.load.image('txt19', 'assets/txt/txt19.png')

        //Audio
        this.load.audio ('IntroAud', 'assets/sounds/CANCIONES/Audio_Introduccion_01.mp3');
        this.load.audio ('CancionIntro2', 'assets/sounds/CANCIONES/Cancion_Intro_02.mp3') 
        //Sonido Telefono
        this.load.audio ('Telefono', 'assets/sounds/AUDIO INTRO 2/TELEFONO SONANDO.mp3');
        //Lineas voces
        this.load.audio ('Linea1', 'assets/sounds/AUDIO INTRO 2/Linea_1.mp3');
        this.load.audio ('Linea2', 'assets/sounds/AUDIO INTRO 2/Linea_2.mp3');
        this.load.audio ('Linea3', 'assets/sounds/AUDIO INTRO 2/Linea_3.mp3');
        this.load.audio ('Linea4', 'assets/sounds/AUDIO INTRO 2/Linea_4.mp3');
        this.load.audio ('Linea5', 'assets/sounds/AUDIO INTRO 2/Linea_5.mp3');
        this.load.audio ('Linea6', 'assets/sounds/AUDIO INTRO 2/Linea_6.mp3');
        this.load.audio ('Linea7', 'assets/sounds/AUDIO INTRO 2/Linea_7.mp3');
        this.load.audio ('Linea8', 'assets/sounds/AUDIO INTRO 2/Linea_8.mp3');
        this.load.audio ('Linea9', 'assets/sounds/AUDIO INTRO 2/Linea_9.mp3');
        this.load.audio ('Linea10', 'assets/sounds/AUDIO INTRO 2/Linea_10.mp3');
    }

    create() {

        //Musica
        this.musicIntro1 = this.sound.add('IntroAud')

     musicConfig ={
        mute: false,
        volume:0.5,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }
    
     this.musicIntro1.play(musicConfig);

        this.add.image(400, 250, 'introbg')

        var radio = this.add.image(400, 250, 'radio')

        radio.setInteractive()

        radio.on('pointerdown', () => this.bye() && this.sound.play('IntroAud'))

    }

    bye(){

        var uno = this.add.image(400, 250, 'txt16') 

        uno.setInteractive()

        uno.on('pointerdown', () => this.bye2())
    }

    bye2(){

        var dos = this.add.image(400, 250, 'txt17')

        dos.setInteractive()

        dos.on('pointerdown', () => this.bye3())
    }

    bye3(){

        var tres = this.add.image(400, 250, 'txt18')

        tres.setInteractive()

        tres.on('pointerdown', () => this.bye4()) 
    }

    bye4(){

        var cuatro = this.add.image(400, 250, 'txt19') 

        cuatro.setInteractive()

        cuatro.on('pointerdown', () => this.hello())
        this.musictel = this.sound.add('Telefono')

     musicConfig ={
        mute: false,
        volume:0.4,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
    }
    
     this.musictel.play(musicConfig)
        
    }

    hello(){ 
        this.musictel.stop(musicConfig)
        var one = this.add.image(400, 250, 'txt13')
        
        this.musicintro = this.sound.add('CancionIntro2')

        musicConfig ={
           mute: false,
           volume:0.2,
           rate: 1,
           detune: 0,
           seek: 0,
           loop: true,
           delay: 0
       }
       
        this.musicintro.play(musicConfig)

        one.setInteractive()

        one.on('pointerdown', () => this.hello2()) && this.musicIntro1.stop(musicConfig)
        this.musicline = this.sound.add('Linea1')

     musicConfig ={
        mute: false,
        volume:0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
    }
    
     this.musicline.play(musicConfig)
    }

    hello2(){
        this.musicline.stop(musicConfig)

        var two = this.add.image(400, 250, 'txt14') 

        two.setInteractive()

        two.on('pointerdown', () => this.hello3())
        this.music = this.sound.add('Linea6')

     musicConfig ={
        mute: false,
        volume:0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 1
    }
    
     this.music.play(musicConfig)
    }

    hello3(){
      this.music.stop(musicConfig)
      
        var three = this.add.image(400, 250, 'txt15')

        three.setInteractive()

        three.on('pointerdown', () => this.scene.start('nivel1') && this.musicintro.stop(musicConfig));
        this.music = this.sound.add('Linea7')

     musicConfig ={
        mute: false,
        volume:0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }
    
     this.music.play(musicConfig)

     
    }
    
}