import style from "./Process.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";

const Process = () => {
    return (
        <section className={style.processSection}>
            <div className={style.processDescription}>
                <div>Process</div>
                <span>
              What steps are required to build a SaaS marketing site using the
              molecule template?
            </span>
                <button>Get molecule</button>
            </div>
            <div >
                <div className={style.processStepsWrapper}>
                    <div className={style.stepsLine}></div>
                    <div className={style.processStep}>
                        <img
                            src={firstSiteConfig.stepsImages1}
                            alt="stepsImages1 not found"
                        />
                        <div>
                            <h2>Get molecule</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.
                            </div>
                        </div>
                    </div>

                    <div className={style.processStep}>
                        <img
                            src={firstSiteConfig.stepsImages2}
                            alt="stepsImages2 not found"
                        />
                        <div>
                            <h2>Edit fonts, colors, images & text</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.
                            </div>
                        </div>
                    </div>
                    <div className={style.processStep}>
                        <img
                            src={firstSiteConfig.stepsImages3}
                            alt="stepsImages3 not found"
                        />
                        <div>
                            <h2>Publish!</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;