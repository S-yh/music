import React, { useState, useEffect } from 'react'

interface Props {
    images: string[],
    interval?: number
}


const Carousel: React.FC<Props> = props => {
    const [activeIndex, setActiveIndex] = useState(0)
    const items = props.images
    let timer: any

    const turn = (step: number = 1) => {
        let index = activeIndex + step
        index > items.length && (index = 0)
        index < 0 && (index = items.length - 1)
        setActiveIndex(index)
    }
    const go = () => {
        timer = setInterval(() => turn(), props.interval)
    }

    useEffect(() => {
        if (activeIndex === items.length) setActiveIndex(0) 
    }, [activeIndex, items])

    useEffect(() => {
        go()
        return () => {
            clearInterval(timer)
        }
    })

    return (
        <div className="carousel">
            {items.map((item, index) => (
                <img src={item} alt='' key={item} className={
                    `${index === activeIndex
                        ? 'center' : index === activeIndex + 1 || (index === 0 && activeIndex === items.length - 1)
                            ? 'right' : index === activeIndex - 1 || (index === items.length - 1 && activeIndex === 0)
                                ? 'left' : 'other'} `}
                />
            ))}
        </div>
    )
}

/** 默认值 */
Carousel.defaultProps = {
    interval: 4000
}

export default Carousel