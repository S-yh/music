import React, { useState } from 'react'
import { Link } from "react-router-dom";
const SearchHeader: React.FC = props => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className="search-header">
            <i className="iconfont icon-maikefeng icon-left" />
            <Link to="/search">
                <input value={searchValue} placeholder="单曲/歌手/电台" onChange={e => setSearchValue(e.target.value)} />
            </Link>
            <i className="iconfont icon-rank icon-right" />
        </div>
    )
}

export default SearchHeader