import style from './Team.module.scss'
import {firstSiteConfig} from "../../utils/imageConfig.ts";

const Team = () => {
    return (
        <section className={style.teamInfo}>
            <div className={style.teamInfoLeftBlock}>
                <h4>Team</h4>
                <h3>
                    Meet the <span>talented team</span> behind the molecule SaaS
                    template.
                </h3>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                    commodo diam libero vitae erat.
                </div>
                <button>Meet the team</button>
            </div>
            <div className={style.teamImages}>
                <div className={style.teamImageFirstBlock}>
                    <img
                        src={firstSiteConfig.teamImage1}
                        alt="teamImage1 not found"
                    />
                    <img
                        src={firstSiteConfig.teamImage2}
                        alt="teamImage2 not found"
                    />
                </div>
                <div className={style.teamImageSecondBlock}>
                    <img
                        src={firstSiteConfig.teamImage3}
                        alt="teamImage3 not found"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;