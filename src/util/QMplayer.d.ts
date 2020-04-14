declare enum EType {
    error,
    play,
    pause
}

interface Search {
    text: string;
    page: number;
    limit: number;
}

interface QMplayerInterface {
    currentTime: Number;
    volume: Number;
    loop: Boolean;
    duration: Number;
    muted: Boolean;
    index: Number;
    playListAdd: (songid: any) => void;
    play: (songid: any) => void;
    playNext: () => void;
    playPrev: () => void;
    pause: () => void;
    toggle: () => void;
    searchMusic: (options: Search) => void;
    on: (eventType: EType, eventHandler: Function) => void;
    off: (eventType: EType, eventHandler: Function) => void;
}

declare class QMplayer implements QMplayerInterface {
    currentTime: Number;
    volume: Number;
    loop: Boolean;
    duration: Number;
    muted: Boolean;
    index: Number;
    playListAdd(songid: any): void;
    play(songid: any): void;
    playNext(): void;
    playPrev(): void;
    pause(): void;
    toggle(): void;
    searchMusic(options: Search): void;
    on(eventType: EType, eventHandler: Function): void;
    off(eventType: EType, eventHandler: Function): void;
}

declare module "QMplayer" {
    export = QMplayer
}


