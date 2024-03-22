import style from "./BuyMolecule.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";

const BuyMolecule = () => {
    return (
        <section className={style.buySection}>
            <div>
                <img src={firstSiteConfig.bigLogo} alt="bitLogo not found"/>
                <h2>Think you've seen enough?</h2>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                </h3>
                <div className={style.buyRequest_buttonBlock}>
                    <button>Buy molecule</button>
                    <button>Read more</button>
                </div>
            </div>
        </section>
    );
};

export default BuyMolecule;