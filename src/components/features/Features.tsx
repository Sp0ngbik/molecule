import style from "./Features.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";

const Features = () => {
    return (
        <section className={style.featureSection}>
                <div className={style.featureImage}>
                    <img
                        src={firstSiteConfig.secondBlockImg}
                        alt="secondBlock png not found"
                    />
                </div>
                <div className={style.featureDescription}>
                    <div className={style.descriptionTitle}>
                        <div>Features</div>
                        <h3 className={style.descriptionSubtitle}>
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
                    <div className={style.featureBlockWrapper}>
                        <div>
                            <div className={style.featureBlock}>
                                <img
                                    src={firstSiteConfig.blockImg1}
                                    alt="blockimg1 not found"
                                />
                                <span>Pages you'll use</span>
                            </div>
                            <div className={style.featureBlock}></div>
                            <h4>
                                Molecule doesn't come with 200+ page layout — it comes with
                                the pages yo'll actually use.
                            </h4>
                        </div>
                        <div>
                            <div className={style.featureBlock}>
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
                            <div className={style.featureBlock}>
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
                            <div className={style.featureBlock}>
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
        </section>
    );
};

export default Features;