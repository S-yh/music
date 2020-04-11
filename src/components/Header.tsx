import React from "react";
import { Link, useHistory } from "react-router-dom";

interface Props {
    tabs: { index: string, name: string }[]
}

const Header: React.FC<Props> = props => {
    const { tabs } = props
    const history = useHistory()
    return (
        <div className="tab">
            {tabs.map(item =>
                <Link to={'/home/' + item.index} key={item.index} className="tab-item">
                    <div className={`tab-item-text ${history.location.pathname === '/home/' + item.index ? 'tab-item-text-active' : ''}`}>{item.name}</div>
                </Link>
            )}
        </div>
    )
}

export default Header