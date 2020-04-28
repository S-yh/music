import React, { useState, useEffect } from 'react'
import $http from '../../../api'
import * as API from "../../../api/API_URL";
import { Link } from 'react-router-dom';

const Rank: React.FC = props => {
    const [rankList, setRankList] = useState([])

    const init = async () => {
        const res = await $http.get(API.RANK)
        setRankList(res.data.data)
    }

    const cacheRankId = async () => {
        
    }
    useEffect(() => {
        init()
    }, [])

    return (
        <div className="rank">
            {
                rankList.map((item: any, index) => (
                    <div key={item.title}>
                        <div className="rank-title">{item.title}</div>
                        {
                            index === 0 && item.list.map((list: any) => (
                                <Link
                                    className="rank-detail"
                                    key={list.label}
                                    to={{
                                        pathname: "/songlist",
                                        state: { rankId: list.value, imgUrl: list.picUrl }
                                    }}
                                    onClick={cacheRankId}
                                >
                                    <div className="rank-detail-title">{list.label}</div>
                                    {
                                        list.song.map((song: any, index: number) => (
                                            <li key={song.title}>{`${index + 1}. ${song.title} - ${song.singerName}`}</li>
                                        ))
                                    }
                                    <img src={list.picUrl} alt="" />
                                </Link>
                            ))}
                        {
                            index !== 0 && (
                                <div className="rec-list" style={{ marginTop: '2vh' }}>
                                    {
                                        item.list.slice(0, 9).map((list: any) => (
                                            <Link
                                                key={list.value}
                                                to={{
                                                    pathname: "/songlist",
                                                    state: {
                                                        id: list.value,
                                                        imgurl: list.picUrl
                                                    }
                                                }}
                                            >
                                                <img src={list.picUrl} alt="" className="img" />
                                            </Link>
                                        ))}
                                </div>
                            )}
                    </div>
                ))}
        </div>
    )
}

export default Rank