import React, {useRef, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css'
import {Carousel} from "react-responsive-carousel";
import {CarouselItem} from "../../../../../../until/CarouselItem";

import {useTranslation} from "react-i18next";

const CarouselBox = () => {

    const {t, i18n} = useTranslation();


    const carouselRef = useRef(null);

    const [index, setIndex] = useState(0)

    const handlePrev = () => {
        setIndex(index - 1)
        if (index === -1) {
            setIndex(CarouselItem.length - 2)
        }
    };

    const handleNext = () => {
        setIndex(index + 1)
        if (index === CarouselItem.length - 1) {
            setIndex(0)
        }
    };


    return (
        <div className={"carousel"}>
            <Carousel

                ref={carouselRef}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                showThumbs={false}
                useKeyboardArrows={false}
                autoPlay={false}
                stopOnHover={false}
                swipeable={false}
                dynamicHeight={false}
                emulateTouch={false}
                autoFocus={false}
                className="carousel-container"

                selectedItem={index}
            >
                {CarouselItem.map((item, index) => (
                    <div className="container" key={index}>
                        <div className="image-container">
                            <img className="image" src={item.image} />
                        </div>
                        <div className="overlay">
                            <h1 className="text-transform-uppercase">{t(item.title)}</h1>
                            <p>{t(item.description)}</p>
                            <p className="coin">{t(item.coins)}</p>
                            <div className="buttons">
                                {item.buttons.map((button, index) => (
                                    <button key={index} className={button.className}>
                                        {t(button.label)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            <div className={"arrows"}>
                <button onClick={handlePrev}>❮</button>
                <div>
                    {CarouselItem.map((item, itemIndex) => (
                        <button
                            key={itemIndex}
                            onClick={() => setIndex(itemIndex)}
                            className={index === itemIndex ? "dot dot-on" : "dot"}
                        >
                            •
                        </button>
                    ))}
                </div>
                <button onClick={handleNext}>❯</button>
            </div>
        </div>
    );
}

export default CarouselBox;
