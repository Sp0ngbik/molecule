import style from "./Features.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";

const Features = () => {
    return (
        <section className={style.secondContentBlock}>
            <div className={style.secondBlockMainContent}>
                <div>
                    <img
                        className={style.secondContLeftBlock}
                        src={firstSiteConfig.secondBlockImg}
                        alt="secondBlock png not found"
                    />
                </div>
                <div className={style.secondContRightBlock}>
                    <div className={style.secondRightUpBlock}>
                        <div>Features</div>
                        <h3 className={style.secondRightTitle}>
                            See how easy it is to <span>edit Molecule</span> to your
                            liking.
                        </h3>
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique. Duis
                            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                            commodo diam libero vitae erat.
                        </h4>
                    </div>
                    <div className={style.secBlockRightBottom}>
                        <div>
                            <div className={style.titleBottomBlock}>
                                <img
                                    src={firstSiteConfig.blockImg1}
                                    alt="blockimg1 not found"
                                />
                                <span>Pages you'll use</span>
                            </div>
                            <div className={style.titleBottomBlock}></div>
                            <h4>
                                Molecule doesn't come with 200+ page layout — it comes with
                                the pages yo'll actually use.
                            </h4>
                        </div>
                        <div>
                            <div className={style.titleBottomBlock}>
                                <img
                                    src={firstSiteConfig.blockImg2}
                                    alt="blockimg2 not found"
                                />
                                <span>Native image effects</span>
                            </div>
                            <h4>
                                Instead of having to add effects to images in an image
                                editor, simply replace the existing images and all effects
                                will appear.
                            </h4>
                        </div>
                        <div>
                            <div className={style.titleBottomBlock}>
                                <img
                                    src={firstSiteConfig.blockImg3}
                                    alt="blockimg3 not found"
                                />
                                <span>Global typography</span>
                            </div>
                            <h4>
                                Change the body font once and every single line of text on
                                the page will change.
                            </h4>
                        </div>
                        <div>
                            <div className={style.titleBottomBlock}>
                                <img
                                    src={firstSiteConfig.blockImg4}
                                    alt="blockimg4 not found"
                                />
                                <span>Global colors</span>
                            </div>
                            <h4>
                                Change the global color swatches and see your colors change
                                everywhere.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;