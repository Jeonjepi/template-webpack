import { Missile } from "./Missile";

class Enemy extends Phaser.Physics.Arcade.Sprite{

    //몬스터 클래스에서 필요한 정보들은 모두 자신인 this에 설정한다
    //this에 설정한 정보들은 클래스 내부의 모든 함수에서 사용할 수 있다
    constructor(scene, x, y, target){ //초기화
        super(scene, x, y)
        //장면 객체 저장 
        this.scene = scene;

        //타겟 설정(플레이어)
        this.target = target;

        //이미지 클래스를 상속받았기 때문에 setTexture 함수를 사용할 수 있음
        //몬스터 설정 ( 대상의 출력 이미지를 설정하는 함수이며 이를 이용해 다른 이미지로의 변경 가능 )
        scene.add.sprite(x, y * 2 / 5)
        .setDisplaySize(200, 200)
        .play('slimeMove')

        this.missile = new Missile(scene)

        this.setPosition(x,y)
        this.setDepth(5);

        //장면에 추가 
        scene.add.existing(this);
        //물리 엔진 추가
        scene.physics.add.existing(this)
        //지도에 가두기 
        this.setCollideWorldBounds(true)
    }

    //갱신
    preUpdate(){
        //타겟과 스피드
        this.missile.createLinearDownMissile(this.target, 100)
    }
}

export { Enemy }