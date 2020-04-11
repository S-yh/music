import React from 'react'
import Carousel from "../../../components/Carousel";
import { Link } from "react-router-dom";

const Recommend: React.FC = props => {
    return (
        <div>
            <Carousel images={[
                require('../../../assets/image/carousel/carousel-cover-one.jpg'),
                require('../../../assets/image/carousel/carousel-cover-two.jpg'),
                require('../../../assets/image/carousel/carousel-cover-three.jpg'),
                require('../../../assets/image/carousel/carousel-cover-four.jpg'),
                require('../../../assets/image/carousel/carousel-cover-five.jpg'),
                require('../../../assets/image/carousel/carousel-cover-six.jpg'),
                require('../../../assets/image/carousel/carousel-cover-seven.jpg')
            ]} />
            <div className="rec-nav">
                <Link to="">
                    <div className="rec-nav-ico">
                        <img src={require('../../../assets/image/cm2_discover_icn_fm-ip6@2x.png')} alt="" />
                    </div>
                    私人FM
                </Link>
                <Link to="">
                    <div className="rec-nav-ico">
                        <img src={require('../../../assets/image/cm4_disc_topbtn_daily-ip6@2x.png')} alt="" />
                        <span>{new Date().getDate()}</span>
                    </div>
                    每日歌曲推荐
                </Link>
                <Link to="">
                    <div className="rec-nav-ico">
                        <img src={require('../../../assets/image/cm2_discover_icn_upbill-ip6@2x.png')} alt="" />
                    </div>
                    云音乐热歌榜
                </Link>
            </div>
            <div className="rec-list">

            </div>
        </div>

    )
}

export default Recommend