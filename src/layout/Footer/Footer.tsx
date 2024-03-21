import style from "../Footer/Footer.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";


const Footer = () => {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.footerBody}>
                <div>
                    <img
                        src={firstSiteConfig.footerLogo}
                        alt="footer logoImg not found"
                    />
                    <div className={style.footerLinks}>
                        <span>Home</span>
                        <span>About</span>
                        <span>Pricing</span>
                        <span>Open positions</span>
                        <span>Blog</span>
                    </div>
                    <div className={style.socialMediaIcons}>
                        <img
                            src={firstSiteConfig.instaIcon}
                            alt="instaIcon footer not found"
                        />
                        <img
                            src={firstSiteConfig.twitterIcon}
                            alt="twitterIcon footer not found"
                        />
                        <img
                            src={firstSiteConfig.linkedInIcon}
                            alt="linkedInIcon footer not found"
                        />
                    </div>
                </div>
                <div className={style.footerBottom}>
                    <div>
                        © Molecule, LLC. All rights reserved. Powered by
                        <span> Webflow .</span>
                    </div>
                    <div className={style.politicsEtc}>
                        <span>Licensing</span>
                        <span>Privacy Policy</span>
                        <span>Terms & conditions</span>
                        <span>Cookie policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;