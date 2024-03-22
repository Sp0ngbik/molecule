import style from "./Produce.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";

const Produce = () => {
    return (
        <section className={style.produceSection}>
                <div className={style.produceTextWrapper}>
                    <div className={style.mainContentLeftBlock}>
                        <div className={style.contentHeadText}>
                            Molecule is a SaaS marketing template that's
                            <span> easy to modify</span>.
                        </div>
                        <div className={style.contentDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique. Duis
                            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                            commodo diam libero vitae erat.
                        </div>
                        <div className={style.produceSignUp}>
                            <input placeholder="Enter your email" type={'email'}/>
                            <button>Sign up</button>
                        </div>
                        <div className={style.produceSignUp}>
                            By clicking Sign Up you're confirming that you agree with our
                            <span>&nbsp;Terms and Conditions</span>
                        </div>
                    </div>
                    <img
                        className={style.produceImage}
                        src={firstSiteConfig.frame}
                        alt="frame not found"
                    />
                </div>
            <div >
                <div className={style.sponsorsUsage}>
                    Used by the leading SaaS companies of tomorrow.
                </div>
                <div className={style.sponsors}>
                    <img
                        src={firstSiteConfig.mainBlockImg1}
                        alt="mainBlockImg1 not found"
                    />
                    <img
                        src={firstSiteConfig.mainBlockImg2}
                        alt="mainBlockImg2 not found"
                    />
                    <img
                        src={firstSiteConfig.mainBlockImg3}
                        alt="mainBlockImg3 not found"
                    />
                    <img
                        src={firstSiteConfig.mainBlockImg4}
                        alt="mainBlockImg4 not found"
                    />
                    <img
                        src={firstSiteConfig.mainBlockImg5}
                        alt="mainBlockImg5 not found"
                    />
                    <img
                        src={firstSiteConfig.mainBlockImg6}
                        alt="mainBlockImg6 not found"
                    />
                </div>
            </div>
        </section>
    );
};

export default Produce;