class Player extends Phaser.Physics.Arcade.Image{
    //게임 이미지에 장면을 저장하는 거구나!!!! 오옹
    constructor(scene, x, y){
        super(scene, x, y);

        //장면 저장
        this.scene = scene;

        //객체 설정
        this.setTexture('PlayerDefault');
        this.setPosition(x,y);
        this.setDepth(6);

        this.speed = 5;

        //이동키 설정
        this.key = {
            up : scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            down : scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
            left : scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right : scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        }

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
    }

    preUpdate(){
        //마우스 버튼 감지
        const pointer = this.scene.input.activePointer;
        if(pointer.isDown){
            //마우스를 우선적으로 처리 
            //거리를 계산해야 함  
            //계산과정을 몰라도 두 지점만 알려주면 거리와 각도를 알려줌
            const distance = Phaser.Math.Distance.Between(
                pointer.x, pointer.y, this.x, this.y
            )
            //각도 계산
            const angle = Phaser.Math.Angle.Between(
                pointer.x, pointer.y, this.x, this.y
            )
            const dx = Math.cos(angle) * this.speed;
            const dy = Math.sin(angle) * this.speed;

            this.x -= dx;
            this.y -= dy;
        }
        //추가해둔 키보드 방향키가 눌리면 isDown 속성이 true가 되기 때문에
        //해당 키에 맞게 x,y 좌표를 변경해야 함(speed 반영)
        if(this.key.up.isDown) this.y -= this.speed;
        if(this.key.down.isDown) this.y += this.speed;
        if(this.key.left.isDown) this.x -= this.speed;
        if(this.key.right.isDown) this.x += this.speed;
    }
}

export { Player }