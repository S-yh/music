/// <reference path="./QMplayer.d.ts" />

import qmplayer from 'qm-player'

let player: QMplayer = new QMplayer()

if (!(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)))  {
    player = new qmplayer()
}

export default player