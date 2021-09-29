var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11]
};

var game = new Phaser.Game(config);

// Intro

var intro;
var first;
///var second; 

// Lvl1
var score;
var gameOver;
var camera;
var map; 
var tileset1; 
var boundaries;
var keys; 
var keycount; 
var heladeria; 
var heladeriaz;
var txt;
var cantgo; 
var cantgotxt;
var layerfondo1; 
var layerfondo2; 
var entes; 
var bakk; 
var casasdeco; 
var farmacia; 
var inst; 

var camera;
var player;
var rayall;
var flechas;
var platforms;
var cursors;
var scoreText;
var rayoText;
var rayoScore;
var ray;
var clok; 
var gapple;
var puerta;
var music;
var musicConfig; 
var sfxJump;
var sfxGoldenApple;
var sfxRayo;
var victory;
var timedEvent;
var initialTime;
var timeText;
var level = 0;
var enter;
var enteryes;


// Lvl2

var crowd;
var instructions1;
var coinall;
var coincount; 
var crowded;
var coptalkie;
var timedEvent;
var initialTime;
var timeText; 
var youlost;
var heladeriaz; 
var layerfondobosque1;
var layerfondobosque2; 
var tileset1;
var tileset2;
var map; 

// Heladería 

var mesas; 
var candyman;
var candytxt; 
var pharmacy; 
