import style from "./Slide.module.scss";
import {SliderValue} from "../../../const";

type SlideProps = {
    slide: SliderValue
}

const Slide = ({slide}: SlideProps) => {
    return (
        <div >
            <div className={style.sliderSpeech}>
                {slide.speech}
            </div>
            <div className={style.slideContent}>
                <img
                    className={style.sliderPhoto}
                    src={slide.img}
                    alt="designer not found"
                />
            </div>
            <div className={style.memberName}>{slide.name}</div>
            <div className={style.memberPosition}>
                {slide.position}
            </div>
        </div>
    )
};

export default Slide;