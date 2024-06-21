import Phaser from 'phaser';
import { Preloader } from './scenes/Preloader';
import { Loading } from './scenes/Loading';
import { Round } from './scenes/Round';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

const width = window.innerWidth;
const height = window.innerHeight;

const config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    parent: 'game-container',
    backgroundColor: '#028af8',
    physics:{ //물리 엔진
        default:'arcade', //arcade 엔진
        debug:true //디버깅 사용
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width:width,
        height:height
    },
    scene: [
        Preloader,
        Loading,
        Round
    ]
};

export default new Phaser.Game(config);
