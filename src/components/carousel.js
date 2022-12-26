import React, { useState, useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';


const Carousel = ({items}) => {
    const percent = 0.09;
    const section = useRef(null);
    const [padding, setPadding] = useState(0);

    const syncState = () => {
        const { current } = section;
        if (current) {
            setPadding(current.offsetWidth * percent);
        }
    };

    useEffect(syncState, []);

    return (
        <div ref={section}>
            <AliceCarousel
                mouseTracking
                items={items}
                paddingRight={padding}
                onResized={syncState}
            />
        </div>
    );
};
export default Carousel