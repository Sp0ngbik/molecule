import style from "./Stats.module.scss";

const Stats = () => {
    return (
        <section className={style.statsSection}>
                <div className={style.statsContent}>
                    <div className={style.statsPreview}>
                        <h4>Stats</h4>
                        <div>
                            Teams all over the place have already used Molecule to get
                            <span> stunning results </span>.
                        </div>
                    </div>
                    <div className={style.statsDescription}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique. Duis
                            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                            commodo diam libero vitae erat.
                        </div>
                        <div className={style.statsPercent}>
                            <div>
                                <h3>87%</h3>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                            <div>
                                <h3>99%</h3>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Stats;