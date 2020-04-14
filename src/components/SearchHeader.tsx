import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
const SearchHeader: React.FC = props => {
    const route = useLocation()
    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        route.pathname === '/search' && inputRef.current && inputRef.current.focus()
    })
    return (
        <div className="search-header">
            <i className="iconfont icon-maikefeng icon-left" />
            {
                route.pathname !== '/search' &&
                <Link to="/search">
                    <input type="text" placeholder="单曲/歌手/电台" />
                </Link>
            }
            {
                route.pathname === '/search' &&
                <input ref={inputRef} value={searchValue} placeholder="单曲/歌手/电台" onChange={e => setSearchValue(e.target.value)} />
            }
            <i className="iconfont icon-rank icon-right" />
        </div>
    )
}

export default SearchHeader