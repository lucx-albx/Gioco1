let score=1200;
let F=0;
let scorePunt=0;
let open=0;
let flag=0;
let spawn=0;
let lvl=0;
let mov=0;
let f=0;
let dragov=5000;
let mov2=0;
let win=0;

class primaScena extends Phaser.Scene{

    constructor(){
        super("primaScena")
    }

    preload(){
        this.load.image('BG', './assets/BG.jpg');
        this.load.image('floor2', './assets/floor2.jpg');
        this.load.image('player', './assets/Knight.png');
        this.load.image('bullet', 'assets/bullet.png');
        this.load.image('cannon', 'assets/cannon2.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('tubo1', 'assets/tubos.png');
        this.load.image('tubo2', 'assets/tubos.png');
        this.load.image('tubo3', 'assets/tubos.png');
        this.load.image('brick', 'assets/brick2.png');
        this.load.image('floor3', './assets/floor3.jpg');
        this.load.image('star', './assets/star.png');   
        this.load.image('block', './assets/Block.png');
        this.load.image('floor4', './assets/floor4.jpg');
        this.load.image('floor5', './assets/floor5.jpg');
        this.load.image('screen', './assets/Schermata.png');
        this.load.image('GameOver', './assets/over.png');
        this.load.image('Level2', './assets/night.jpg');
        this.load.image('zombie', './assets/Enemy.png');
        this.load.image('zombie2', './assets/Enemy2.png');
        this.load.image('box', './assets/box.png');
        this.load.image('door1', './assets/door1.png');
        this.load.image('key', './assets/key.png');
        this.load.image('portal', './assets/Portal.png');
        this.load.image('vulcano', './assets/Vulcano.png');
        this.load.image('player2', './assets/player2.png');
        this.load.image('level3', './assets/level3.png');
        this.load.image('proj', './assets/proj.png');
        this.load.image('drago', './assets/drago.png');
        this.load.image('fire', './assets/Fire.png');
        this.load.image('cannon2', './assets/cannon1Lv3.png');
        this.load.image('cannon3', './assets/cannon2Lv3.png');
        this.load.image('proj2', './assets/Proj2.png');
        this.load.image('zombie3', './assets/Enemy3.png');
        this.load.image('win', './assets/win.png');
    }

    //inizio primo livello
    create(){
        
        //sfondo-livello1
        this.screen=this.add.image(915, 425, 'screen').setDepth(10).setScale(2);
        this.sfondo=this.add.image(450, 250, 'BG').setScale(3.4);
        

        //player-player2
        this.player = this.physics.add.sprite(1850, 700, 'player').setScale(0.25).setCollideWorldBounds().setDepth(1); 
        this.drago= this.physics.add.sprite(170, 492, 'drago').setScale(1).setCollideWorldBounds().setDepth(1);
        this.drago.setVisible(false);

        //floor principale
        this.floor2 = this.physics.add.staticGroup({
            key: "floor2",
            repeat: 5,
            setXY: {
                x: 0,
                y: 816,
                stepX: 350,
            },
            setScale: {
                x: 0.55
            }
        });

        //mattone
        this.brick = this.physics.add.staticGroup({
            key: "brick",
            setXY: {
                x: 1250,
                y: 729,
            },
            setScale: {
                x: 1
            }
        });

        //fllor fluttuanti
        this.floor3 = this.physics.add.staticGroup({
            key: "floor3",
            setXY :{x:1900, y:600},
            setScale: {
                x: 1
            }
        });

        this.floor4 = this.physics.add.staticGroup({
            key: "floor3",
            setXY :{x:30, y:350},
            setScale: {
                x: 1
            }
        });

        this.floor5 = this.physics.add.staticGroup({
            key: "floor4",
            setXY :{x:1090, y:220},
            setScale: {
                x: 1
            }
        });

        //tasti
        this.tastiera = this.input.keyboard.createCursorKeys();

        //fisica
        this.physics.add.collider(this.floor3, this.player);
        this.physics.add.collider(this.floor4, this.player);
        this.physics.add.collider(this.player, this.cannon);
        this.physics.add.collider(this.brick, this.player);
        this.physics.add.collider(this.floor2, this.player);
        this.physics.add.collider(this.floor2, this.player2);
        this.physics.add.collider(this.floor5, this.player);
        this.physics.add.collider(this.floor2, this.drago);
        

        //cannone-bullet
        this.cannon = this.physics.add.staticGroup({
            key: "cannon",
            setXY: {
                x: 90,
                y: 717,
            },
            setScale: {
                x: 0.7
            }
        });
        this.physics.add.collider(this.player, this.cannon);

        this.bullet = this.physics.add.image(64, 657, 'bullet').setOrigin(0).setScale(0.2);
        this.bullet.body.allowGravity=false
        this.speed = Phaser.Math.GetSpeed(600,3);

        this.physics.add.overlap(this.player,this.bullet,(player,bullet)=>{
            this.bullet.x = 64;

            score=score-200;
            this.scoreText.setText('Life: ' + score);
        });

        //gestione tubi
        this.tubo1 = this.physics.add.staticGroup({
            key: "tubo1",
            setXY: {
                x: 1790,
                y: 488.7,
                stepX: 60,
            },
            setScale: {
                x: 1
            }
        });

        this.tubo2 = this.physics.add.staticGroup({
            key: "tubo2",
            setXY: {
                x: 90,
                y: 238.5,
            },
            setScale: {
                x: 1
            }
        });

        this.tubo3 = this.physics.add.staticGroup({
            key: "tubo3",
            setXY: {
                x: 930,
                y: 110,
            },
            setScale: {
                x: 1
            }
        });

        this.physics.add.collider(this.player,this.tubo1,(player,tubo)=>{
            if (this.tastiera.down.isDown) {
                this.player.setVisible(false);
                this.player.setPosition(70, 111);
            }
            this.player.setVisible(true)
        });

        this.physics.add.collider(this.player,this.tubo2,(player,tubo)=>{
            if (this.tastiera.space.isDown && scorePunt>=5) {
                this.player.setVisible(false);
                this.player.setPosition(1100, 110);
            }
            this.player.setVisible(true)
        });

        this.physics.add.collider(this.tubo3, this.player);

        //stelle

        this.star = this.physics.add.group({
            key: "star",
            repeat:5,
            setXY :{x:190, y:50, stepX:300},
            setScale: {
                x: 0.050
            }
        });

        this.star.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.5, 0.8));
        });

        this.physics.add.collider(this.floor2, [this.star, this.player]);
        this.physics.add.collider(this.floor3, [this.star, this.player]);
        this.physics.add.collider(this.floor4, [this.star, this.player]);
        this.physics.add.collider(this.floor5, [this.star, this.player]);

        
        this.physics.add.overlap(this.star, this.player, (player,star)=>{
            star.disableBody(true, true);

            scorePunt += 1;
            this.scoreTextP.setText('Point: ' + scorePunt);
        });

        //scritte
        this.level= this.add.text(702, 10, 'Level: 1', { fontSize: '32px', fill: '#00ad45' });
        this.scoreTextP = this.add.text(1712, 10, 'Point: 0', { fontSize: '32px', fill: '#00ad45' });
        this.scoreText = this.add.text(12, 10, 'Life: 1200', { fontSize: '32px', fill: '#00ad45' });
        this.tempo=this.add.text(1200,10,"TIMER: 0",{ fontSize: '32px', fill: '#00ad45' });
        

        //fuoco drago
        this.fire = this.physics.add.image(230, 590, 'fire').setOrigin(0).setScale(1).setDepth(10);
        this.fire.body.allowGravity=false
        this.speed2 = Phaser.Math.GetSpeed(1000,5.53);
        this.fire.setVisible(false);

        //proiettili cannone 2
        this.bullet2 = this.physics.add.image(220, 20, 'proj').setOrigin(0).setScale(1).setDepth(10);
        this.bullet2.body.allowGravity=false
        this.speed3 = Phaser.Math.GetSpeed(900,3);
        this.bullet2.setVisible(false);

        //proiettili cannone 3
        this.bullet3 = this.physics.add.image(900, 725, 'proj2').setOrigin(0).setScale(1).setDepth(10);
        this.bullet3.body.allowGravity=false
        this.speed4 = Phaser.Math.GetSpeed(-1000,3);
        this.bullet3.setVisible(false);
    }

    update(time, delta){
        
        if(this.tastiera.left.isDown){
            this.player.setVelocityX(-190);
            this.player.setFlipX(true)
        }
        else if(this.tastiera.right.isDown){
            this.player.setVelocityX(190);
            this.player.setFlipX(false)
        }
        else{
            this.player.setVelocityX(0);
        }
        if((this.tastiera.up.isDown) && this.player.body.touching.down){
            this.player.setVelocityY(-380);
        }

        this.tempo.setText("TIMER: " + time);

        //gestione bullet
        this.bullet.x += this.speed * delta;
        if (this.bullet.x > 900){
            this.bullet.x = 64;
        }

        //gestione lancio fuoco
        this.fire.x += this.speed2 * delta;
        if(this.fire.x>=1100){
            this.fire.x=230;
        }

        //bullet2
        this.bullet2.y += this.speed3 * delta;
        if(this.bullet2.y>=420){
            this.bullet2.y=20;
        }

        //bullet3
        this.bullet3.x += this.speed4 * delta;
        if(this.bullet3.x<=220){
            this.bullet3.x=920;
        }

        //schermata di caricamento
        if (this.tastiera.space.isDown) {
            this.screen.setVisible(false);
        }

        if(score<=0 || time>=600000){
            this.add.image(915, 425, 'GameOver').setDepth(10).setScale(2); 
        }

        //inizio secondo livello
        if(scorePunt==6){
            this.cannon.clear(true);
            this.bullet.destroy();
            this.floor3.clear(true);
            this.floor4.clear(true);
            this.floor5.clear(true);
            this.tubo1.clear(true);
            this.tubo3.clear(true);
            this.tubo2.clear(true);
            this.brick.clear(true);
            this.star.clear(true);
            this.sfondo.destroy();
            scorePunt=0;
            this.scoreTextP.setText('Point: ' + scorePunt);

            //inizio livello2
            this.BgLevel2=this.add.image(940, 425, 'Level2').setScale(1).setDepth(-1);

            this.door = this.physics.add.staticGroup({
                key: "door1",
                setXY: {
                    x: 1000,
                    y: 712,
                },
                setScale: {
                    x: 1
                }
            });
            
            this.level.setText('Level 2');

            //spary nemico
            
            this.zombie= this.physics.add.sprite(100, 700, 'zombie').setScale(0.35).setCollideWorldBounds().setDepth(1);
            this.physics.add.collider(this.floor2, this.zombie);
            this.physics.add.collider(this.floor2, [this.door,this.player]);
            this.physics.add.overlap(this.player,this.zombie,(player,zombie)=>{
                
                score=score-20;
                this.scoreText.setText('Life: ' + score);
            });

            this.tweens.add({
                targets: this.zombie,
                props: {
                    x: { value: 750, duration: 7000, flipX: true },
                },
                ease: 'Linear',
                yoyo: true,
                repeat: -1
            });

            //gestione key-player
            this.key=this.physics.add.image(90, 760, 'key').setScale(0.4);
            this.physics.add.collider(this.floor2, [this.key,this.player]);

            this.physics.add.overlap(this.player,this.key,(player,key)=>{
                key.disableBody(true,true);

                open=1;
                scorePunt++;
                this.scoreTextP.setText('Point: ' + scorePunt);
            });

            //gestione apertura porta- box che si muove
            this.physics.add.collider(this.player,this.door,(player,door)=>{
                if(open==1){
                    door.destroy();
                    this.box=this.physics.add.image(1000,710,'box').setScale(1).setCollideWorldBounds();
                    this.physics.add.collider(this.floor2, this.box);
                    this.physics.add.collider(this.floor4, this.box);
                    this.physics.add.collider(this.floor3, this.box);
                    this.physics.add.collider(this.floor5, this.box);
                    this.physics.add.collider(this.player, this.box);
                    this.box.setVelocity(0, 0);
                    this.box.setBounce(1, 0);
                }
            });

            //inserimeto piattaforme volanti-zombie2
            this.floor4 = this.physics.add.staticGroup({
                key: "floor3",
                setXY :{x:1954, y:600},
                setScale: {
                    x: 1
                }
            });
            this.physics.add.collider(this.floor4,this.player);

            this.zombie2= this.physics.add.sprite(1560, 492, 'zombie2').setScale(0.35).setCollideWorldBounds().setDepth(1);
            this.tweens.add({
                targets: this.zombie2,      
                props: {
                    x: { value: 1820, duration: 6500, flipX: true },
                },
                ease: 'Linear',
                yoyo: true,
                repeat: -1
            });
            this.physics.add.collider(this.floor4,this.zombie2);

            this.physics.add.overlap(this.player,this.zombie2,(player,zombie2)=>{
                
                score=score-4;
                this.scoreText.setText('Life: ' + score);
            });

            this.floor3 = this.physics.add.staticGroup({
                key: "floor3",
                setXY :{x:30, y:270},
                setScale: {
                    x: 1
                }
            });

            //gestione key2-player
            this.key2=this.physics.add.image(1854, 540, 'key').setScale(0.4);
            this.physics.add.collider(this.floor4, [this.key2,this.player]);

            this.physics.add.overlap(this.player,this.key2,(player,key2)=>{
                key2.disableBody(true,true);

                //creazionebox
                this.box2 = this.physics.add.staticGroup({
                    key: "box",
                    setXY :{x:1250, y:500},
                    setScale: {
                        x: 1    
                    }
                });
                this.physics.add.collider(this.player, this.box2);

                this.box3 = this.physics.add.staticGroup({
                    key: "box",
                    setXY :{x:1000, y:430},
                    setScale: {
                        x: 1    
                    }
                });
                this.physics.add.collider(this.player, this.box3);

                scorePunt++;
                this.scoreTextP.setText('Point: ' + scorePunt);
            });

            //gestione spawn box
            this.box4 = this.physics.add.staticGroup({
                key: "box",
                setXY :{x:700, y:370},
                setScale: {
                    x: 1    
                }
            });
            this.physics.add.collider(this.player, this.box4);

            //floor finale
            this.floor5 = this.physics.add.staticGroup({
                key: "floor4",
                setXY :{x:1690, y:210},
                setScale: {
                    x: 1
                }
            });
            this.physics.add.collider(this.player, this.floor5);

            //crezione porta2
            this.door2 = this.physics.add.staticGroup({
                key: "door1",
                setXY: {
                    x: 70,
                    y: 156,
                },
                setScale: {
                    x: 1
                }
            });
            this.physics.add.collider(this.door2,this.floor3);

            //gestione collisione floor3 e key3 punti
            this.physics.add.collider(this.player, this.floor3,(player,floor3)=>{
                if(flag!=1){    
                    this.key3=this.physics.add.image(1704, 700, 'key').setScale(0.4).setDepth(10);
                    this.physics.add.collider(this.floor2, this.key3);
                    this.physics.add.overlap(this.player, this.key3,(player,key3)=>{
                        key3.disableBody(true,true);
                        scorePunt++;
                        this.scoreTextP.setText('Point: ' + scorePunt);
                    });
                flag=1;
                }
            });

            
            //gestione distruzione e portali
            this.physics.add.collider(this.player,this.door2,(player,door2)=>{
                if(scorePunt==3){
                    door2.destroy();
                    
                    this.portal1 = this.physics.add.image(50, 146, 'portal').setScale(0.4);
                    this.physics.add.collider(this.floor3, this.portal1);  

                    this.physics.add.overlap(this.player,this.portal1,(player,portal)=>{
                    if (this.tastiera.down.isDown) {
                        this.player.setVisible(false);
                        this.player.setPosition(1690, 100);
                    }
                    this.player.setVisible(true)
                    });
                    this.portal2 = this.physics.add.image(1824, 70, 'portal').setScale(0.4);
                    this.physics.add.collider(this.floor5, this.portal2);
                }
            });
            

            //punteggio finale-stella
            this.star2 = this.physics.add.group({
                key: "star",
                setXY :{x:1490, y:100, stepX:300},
                setScale: {
                    x: 0.050
                }
            });
            this.physics.add.collider(this.floor5, this.star2);  

            this.star2.children.iterate(function (child) {
                child.setBounceY(Phaser.Math.FloatBetween(1, 0.8));
            });

            this.physics.add.overlap(this.star2, this.player, (player,star2)=>{
                star2.disableBody(true, true);
    
                scorePunt += 5;
                this.scoreTextP.setText('Point: ' + scorePunt);

            });      
            
        }
        
        //entrata livello finale
        if(scorePunt==8){
           
           this.box.disableBody(true,true); 
           this.box2.clear(true);
           this.box3.clear(true);
           this.box4.clear(true);
           this.portal1.disableBody(true,true);
           this.portal2.disableBody(true,true);
           this.floor3.clear(true);
           this.floor4.clear(true);
           this.door.clear(true);
           this.door2.clear(true);
           this.zombie.destroy();
           this.zombie2.destroy();

           //gestione fine livello entrata vulcano
           if(spawn!=1){
            this.vulcano = this.physics.add.image(1200, 560, 'vulcano').setScale(2.2);
            this.physics.add.collider(this.vulcano, this.floor2);
            this.physics.add.overlap(this.vulcano, this.player,(vulcano,player)=>{
                this.player.setPosition(1750,700);
                lvl=1;
            });
            spawn=1;
            }
        }  

        //terzo livello
        if(lvl==1){
            
            //livello finale
            
            this.level.setText('Level 3');
            scorePunt=0;
            this.scoreTextP.setText('Point: ' + scorePunt);

            //disabilito vulcano-floor5
            this.vulcano.disableBody(true,true); 
            this.floor5.clear(true);

            //new sfondo
            this.level3=this.add.image(940, 425, 'level3').setScale(1).setDepth(-1);   

            //fuoco e player collisione
            this.physics.add.overlap(this.fire,this.player,(fire,player)=>{
                fire.setVisible()
                this.fire.x = 250;
                this.fire.setVisible(true)

                score=score-400;
                this.scoreText.setText('Life: ' + score);
            });

            //visibilità drago e player
            this.lifeDragon = this.add.text(120, 400, 'Life: 5000', { fontSize: '32px', fill: '#00ad45' });
            this.drago.setVisible(true);
            this.fire.setVisible(true); 

            //gestione box e collisione
            this.box = this.physics.add.staticGroup({
                key: "box",
                setXY :{x:950, y:730},
                setScale: {
                    x: 1    
                }
            });
            this.physics.add.collider(this.player, this.box);

            //gestione floor3 e collisione 
            this.floor3 = this.physics.add.staticGroup({
                key: "floor5",
                setXY :{x:1534, y:600},
                setScale: {
                    x: 1
                }
            });
            this.physics.add.collider(this.player, this.floor3);

            //gestione mob
            if(mov==0){
                this.mob= this.physics.add.sprite(1350, 440, 'zombie').setScale(0.35).setCollideWorldBounds().setDepth(1);
            
                this.physics.add.collider(this.floor3, this.mob);
                this.physics.add.overlap(this.player,this.mob,(player,mob)=>{
                
                    score=score-1;
                    this.scoreText.setText('Life: ' + score);
                });

            this.tweens.add({
                targets: this.mob,
                props: {
                    x: { value: 1700, duration: 7000, flipX: true },
                },
                ease: 'Linear',
                yoyo: true,
                repeat: -1
            });

            mov=1;
            }

            //gestione block1-2 e collisione
            this.block2 = this.physics.add.staticGroup({
                key: "block",
                setXY :{x:1814, y:600},
                setScale: {
                    x: 1    
                }
            });

            this.block = this.physics.add.staticGroup({
                key: "block",
                setXY :{x:950, y:406},
                setScale: {
                    x: 1    
                }
            });

            //gestione collisione floor3 e key3 punti
            this.physics.add.collider(this.player, this.block2,(player,block2)=>{
                if(f!=1){    
                    this.keys=this.physics.add.image(1814, 520, 'key').setScale(0.4).setDepth(10);
                    this.keys.setBounce(1,1);
                    this.physics.add.collider(this.block2, this.keys);
                    this.physics.add.collider(this.floor2, this.keys);
                    this.physics.add.overlap(this.player, this.keys,(player,keys)=>{
                        keys.disableBody(true,true);
                        scorePunt++;
                        this.scoreTextP.setText('Point: ' + scorePunt);
                    });
                f=1;
                }
            });

            
            //gestione floor4, gestione stella e floor5
            this.floor4 = this.physics.add.staticGroup({
                key: "floor5",
                setXY :{x:630, y:250},
                setScale: {
                    x: 1
                }
            });
            this.physics.add.collider(this.player, this.floor4,(player,floor4)=>{
                if(F!=1){    
                    this.keys2=this.physics.add.image(1814, 700, 'key').setScale(0.4).setDepth(10);
                    this.physics.add.collider(this.floor2, this.keys2);
                    this.physics.add.overlap(this.player, this.keys2,(player,keys2)=>{
                        keys2.disableBody(true,true);
                        scorePunt++;
                        this.scoreTextP.setText('Point: ' + scorePunt);

                        this.floor5 = this.physics.add.staticGroup({
                            key: "floor3",
                            setXY :{x:1854, y:250},
                            setScale: {
                                x: 1
                            }
                        });
                        //floor5 e player collision
                        this.physics.add.collider(this.floor5, this.player); 
    
                        this.box2 = this.physics.add.staticGroup({
                            key: "box",
                            setXY :{x:1134, y:250},
                            setScale: {
                                x: 1    
                            }
                        });
                        this.physics.add.collider(this.player, this.box2);
    
                        this.star2 = this.physics.add.group({
                            key: "star",
                            setXY :{x:1850, y:0},
                            setScale: {
                                x: 0.050
                            }
                        });

                        this.star2.children.iterate(function (child) {
                            child.setBounceY(Phaser.Math.FloatBetween(1, 0.8));
                        });
                        this.physics.add.collider(this.floor5, this.star2);  

                        //stella2 e bullet3
                        this.physics.add.overlap(this.star2, this.player, (player,star2)=>{
                            star2.disableBody(true, true);
                    
                            scorePunt += 1;
                            this.scoreTextP.setText('Point: ' + scorePunt);
                            if(scorePunt==4){
                                this.cannon3 = this.add.image(853,730,'cannon3').setDepth(2).setScale(1);
                                this.bullet3.setVisible(true);
                                    
                                this.physics.add.overlap(this.drago,this.bullet3,(drago,bullet3)=>{

                                    dragov-=20;
                                    this.lifeDragon.setText('Life: ' + dragov)
                                });
                            }
                        });  
                        //mob e player
                        this.mob2= this.physics.add.sprite(1550, 100, 'zombie2').setScale(0.35).setCollideWorldBounds().setDepth(1);
                    
                        this.physics.add.collider(this.floor5, this.mob2);
                        this.physics.add.overlap(this.player,this.mob2,(player,mob2)=>{
                            score=score-1;
                            this.scoreText.setText('Life: ' + score);
                        });
            
                        this.tweens.add({
                            targets: this.mob2,
                            props: {
                                x: { value: 1750, duration: 7000, flipX: true },
                            },
                            ease: 'Linear',
                            yoyo: true,
                            repeat: -1
                        });
                    });
                F=1;
                }
            });

            //portali
            this.physics.add.collider(this.player, this.block,(player,block)=>{
                if(scorePunt==1){
                    block.destroy();
                    this.portal1 = this.physics.add.image(1826, 200, 'portal').setScale(0.4);
                    this.physics.add.collider(this.block2, this.portal1);  

                    this.physics.add.overlap(this.player,this.portal1,(player,portal)=>{
                    if (this.tastiera.down.isDown) {
                        this.player.setVisible(false);
                        this.player.setPosition(520, 100);
                    }
                    this.player.setVisible(true)
                    });
                    
                    this.portal2 = this.physics.add.image(500, 100, 'portal').setScale(0.4);
                    this.physics.add.collider(this.floor4, this.portal2);
                }
            });

            //stella spawn cannone3 - v2
            this.star = this.physics.add.group({
                key: "star",
                setXY :{x:800, y:100},
                setScale: {
                    x: 0.050
                }
            });

            this.star.children.iterate(function (child) {
                child.setBounceY(Phaser.Math.FloatBetween(1, 0.8));
            });
            this.physics.add.collider(this.floor4, this.star);  

            

            this.physics.add.overlap(this.star, this.player, (player,star)=>{
                star.disableBody(true, true);
    
                scorePunt += 1;
                this.scoreTextP.setText('Point: ' + scorePunt);
                if(scorePunt==2){
                    this.cannon2 = this.add.image(220,0,'cannon2').setDepth(2).setScale(1);
                    this.bullet2.setVisible(true);

                    this.physics.add.overlap(this.drago,this.bullet2,(drago,bullet2)=>{

                        dragov-=1;
                        this.lifeDragon.setText('Life: ' + dragov)
                    });
                }

            }); 
            

        lvl=0;
        }

        if(dragov<=500){

            this.fire.destroy();
            this.bullet2.destroy();
            this.bullet3.destroy();
            this.cannon2.setVisible(false);
            this.cannon3.setVisible(false);

            if(mov2==0){
                this.mob3= this.physics.add.sprite(390, 700, 'zombie3').setScale(0.37).setCollideWorldBounds().setDepth(1);
            
                this.physics.add.collider(this.floor2, this.mob3);
                this.physics.add.overlap(this.player,this.mob3,(player,mob3)=>{
                
                    score=score-20;
                    this.scoreText.setText('Life: ' + score);
            });

            this.tweens.add({
                targets: this.mob3,
                props: {
                    x: { value: 700, duration: 2500, flipX: true },
                },
                ease: 'Linear',
                yoyo: true,
                repeat: -1
            });

            mov2=1;
            }

            this.physics.add.overlap(this.drago, this.player,(drago,player)=>{
                if(this.tastiera.space.isDown && win==0){
                    dragov-=1;
                    this.lifeDragon.setText('Life: ' + dragov)
                }
            
            }); 
        }

        if(dragov<=0 ){
            this.add.image(915, 425, 'win').setDepth(10).setScale(2);
            this.mob3.destroy();
            win=1;
        }

    }
}
export default primaScena;