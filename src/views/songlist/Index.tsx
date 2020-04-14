import React, { useState, useEffect } from 'react'
import $http from '../../api'
import * as API from "../../api/API_URL";
import { useLocation, useHistory } from 'react-router-dom';
import player from '../../util/QMplayer'

interface Songlist {
    logo: string,
    dissname: string,
    nickname: string,
    headurl: string,
    info: { title: string, titleDetail: string }
    list: [],
    songlist: []
}

const Index: React.FC = props => {
    const { rankId, listId, imgUrl } = useLocation().state as { rankId: number, listId: number, imgUrl: string } || {}
    const [songlist, setSonglist] = useState<Songlist>({ info: {}, list: [], songlist: [] } as Songlist)
    const history = useHistory()

    const init = async () => {
        if (!!rankId) {
            const res = await $http.get(API.RANK_LIST_ID + Number(rankId))
            setSonglist(res.data.data)
        }
        if (!!listId) {
            const res = await $http.get(API.SONG_LIST_ID + Number(listId))
            setSonglist(res.data.data)
        }
    }
    const play = (mid: string) => {
        player.play(mid)
    }
    useEffect(() => {
        init()
    }, [])

    return (
        <div className="songlist">
            <header className="songlist-header">
                <i className="iconfont icon-back back" onClick={() => history.goBack()} />
                <span className="title">歌单</span>
                <i className="iconfont icon-rank play" />
            </header>
            <div className="songlist-title">
                <div className="bg" style={{ backgroundImage: `url(${!!rankId ? imgUrl : songlist.logo})`, backgroundSize: '100% 100%' }}></div>
                <img src={!!rankId ? imgUrl : songlist.logo} alt="" className="picture" />
                <span className="title">{!!rankId ? songlist.info.title : songlist.dissname}</span>
                {
                    !!rankId && <span className="sub-title">{songlist.info.titleDetail}</span>
                }
                {
                    !!listId && <span className="sub-title"><img src={songlist.headurl} alt="" />{songlist.nickname}<i className="iconfont icon-back" /></span>
                }
                <div className="ops">
                    <div className="ops-icon"><i className="iconfont icon-fav"/></div>
                    <div className="ops-icon"><i className="iconfont icon-xc_cmt"/></div>
                    <div className="ops-icon"><i className="iconfont icon-share"/></div>
                    <div className="ops-icon"><i className="iconfont icon-download"/></div>
                </div>
            </div>
            <div className="songlist-list">
                <div className="play"><img src={require('../../assets/image/pl-playall.png')} alt="" />播放全部</div>
                <div className="list">
                    {
                        !!rankId && songlist.list.map((item:any, index) => (
                            <div className="list-item">
                                <p>{index + 1}</p>
                                <li onClick={() => play(item.mid)} onTouchEnd={() => play(item.mid)}>
                                    <div>{item.name}</div>
                                    <div className="singer">{item.singerName}</div>
                                    <img src={require('../../assets/image/cm4_act_icn_more@2x.png')} alt=""/>
                                </li>
                            </div>
                        ))
                    }
                    {
                        !!listId && songlist.songlist.map((item:any, index) => (
                            <div className="list-item">
                                <p>{index + 1}</p>
                                <li>
                                    <div>{item.songname}</div>
                                    <div className="singer">{item.singer[0].name} - {item.albumname}</div>
                                    <img src={require('../../assets/image/cm4_act_icn_more@2x.png')} alt=""/>
                                </li>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Index