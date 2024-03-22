import style from "./Blog.module.scss";
import {firstSiteConfig} from "../../utils/imageConfig.ts";

const Blog = () => {
    return (
        <section className={style.blogSection}>
            <div className={style.blogLabel}>Blog</div>
            <div className={style.blogTitle}>
                <h3>
                    The <span>latest news</span> from Molecule.
                </h3>
                <div className={style.blockView}>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <button>View all</button>
                </div>
                <div className={style.blogMainInfo}>
                    <div>
                        <img
                            className={style.mainPhoto}
                            src={firstSiteConfig.blogPhoto1}
                            alt="blogPhoto1 not found"
                        />
                        <h2>How to drive sales in SaaS</h2>
                        <span>
                    Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
                    ultrices, ut faucibus orci tincidunt.
                  </span>
                        <div className={style.bloggerInfo}>
                            <img
                                src={firstSiteConfig.blogPerson1}
                                alt="blogPerson1 not found"
                            />
                            <div>
                                <div>Dwight Schrute</div>
                                <div className={style.bloggerResponseStatus}>
                                    January 25, 2022 <span>28 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className={style.mainPhoto}
                            src={firstSiteConfig.blogPhoto2}
                            alt="blogPhoto2 not found"
                        />
                        <h2>Hiring the right talent</h2>
                        <span>
                    Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
                    condimentum dapibus congue et, vulputate ut ligula.
                  </span>
                        <div className={style.bloggerInfo}>
                            <img
                                src={firstSiteConfig.blogPerson2}
                                alt="blogPerson2 not found"
                            />
                            <div>
                                <div>Lexus Simonis</div>
                                <div className={style.bloggerResponseStatus}>
                                    January 25, 2022 <span>21 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className={style.mainPhoto}
                            src={firstSiteConfig.blogPhoto3}
                            alt="blogPhoto3 not found"
                        />
                        <h2>Is remote work for you? (Yes it is)</h2>
                        <span>
                    Duis tristique sed lorem a vestibulum. Cras commodo
                    consequat orci, in convallis risus egestas non.
                  </span>
                        <div className={style.bloggerInfo}>
                            <img
                                src={firstSiteConfig.blogPerson3}
                                alt="blogPerson3 not found"
                            />
                            <div>
                                <div>Doug Howell</div>
                                <div className={style.bloggerResponseStatus}>
                                    January 25, 2022 <span>29 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;