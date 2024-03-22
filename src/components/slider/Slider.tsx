import style from "./Slider.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";
import {useState} from "react";
import {sliderValues} from "../../const";
import Slide from "./Slide/Slide.tsx";

const Slider = () => {
    const [sliderState, setSliderState] = useState(1);
    const slide = sliderValues.filter(el => el.id === sliderState)
    const nextSlide = () => {
        if (sliderState + 1 > sliderValues.length) {
            setSliderState(1)
        } else {
            setSliderState(sliderState + 1)
        }
    }
    const prevSlide = () => {
        if (sliderState - 1 <= 0) {
            setSliderState(sliderValues.length)
        } else {
            setSliderState(sliderState - 1)
        }
    }

    return (
        <section className={style.sliderSection}>
                <img
                    className={style.sliderLogo}
                    src={firstSiteConfig.chillIndImg}
                    alt="ChillInd not found"
                />
                <img
                    onClick={prevSlide}
                    className={style.arrowsSlider_backward}
                    src={firstSiteConfig.leftArrowSlider}
                    alt="left arrow slider not found"
                />
                {slide.map(slide =>
                    <div key={slide.id}>
                        <Slide slide={slide}/>
                    </div>
                )}
                <img
                    className={style.arrowsSlider_forward}
                    onClick={nextSlide}
                    src={firstSiteConfig.rightArrowSlider}
                    alt="right arrow slider not found"
                />

                <div className={style.sliderDots}>
                    {sliderValues
                        .map(slide => <button key={slide.id}
                                              className={sliderState === slide.id ? style.dotActive : ''}
                                              onClick={() => setSliderState(slide.id)}></button>)}
                </div>
        </section>
    );
};

export default Slider;