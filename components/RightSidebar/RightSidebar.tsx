import styles from './RightSidebar.module.scss';
import {FaSearch} from "react-icons/fa";
import {fixIcon} from "@/utils/fixIcon";
import Link from "next/link";

const RightSidebar = () => {
    const SearchIcon = fixIcon(FaSearch);
    return (
        <div className={styles.rightSidebar}>

            <div className={styles.searchBar}>
                <SearchIcon className={styles.searchIcon} />
                <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}/>
            </div>
            <div className={styles.upgradeBanner}>
                <div className={styles.upgradeContent}>
                    <h2>Upgrade to Premium+</h2>
                    <p>Enjoy additional benefits, zero adds, and the largest reply
                    prioritization.</p>
                    <button className={styles.upgradeButoon}>Upgrade to Premium+</button>
                </div>
            </div>
            <div className={styles.trending}>
                <h2>Explore <span className={styles.betaTag}>Beta</span></h2>
                <ul className={styles.trendingList}>
                    <li>
                        <div className={styles.trendInfo}>
                            <span>CSS . 1 hour ago</span>
                            <h3>
                                Developer spends 4 hours centering div, finally gives up
                            </h3>
                        </div>
                        <div className={styles.trendInfo}>
                            <span>Web Development . 5 hours ago</span>
                            <h3>
                                Inline styles: The controversial method splitting the community
                            </h3>
                        </div>
                        <div className={styles.trendInfo}>
                            <span>World News . 3 hours ago</span>
                            <h3>
                                Trump signs executive order declaring the moon property of the United States,
                                International community breathes an exasperated sigh and prepares for war.
                            </h3>
                        </div>
                        <div className={styles.trendInfo}>
                            <span>CSS . 2 hours ago</span>
                            <h3>
                                Flexbox vs Grid: the ultimate showdown
                            </h3>
                        </div>
                        <div className={styles.trendInfo}>
                            <span>Life . 4 hours ago</span>
                            <h3>
                                Memphis man gets home from work, pets cat, wrestles with personal demons
                            </h3>
                        </div>
                    </li>
                </ul>
                <Link className={styles.showMore} href="#showMore">Show more</Link>
            </div>
            <div className={styles.whoToFollow}>
                <h2>Who to follow</h2>
                <ul className={styles.followList}>
                    <li>
                        <div className={styles.userInfo}>
                            <img
                                src="https://randomuser.me/api/portraits/men/42.jpg"
                                alt="chiller"
                            />
                            <div>
                                <h3>chiller</h3>
                                <span>@chiller</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                    <li>
                        <div className={styles.userInfo}>
                            <img
                                src="https://randomuser.me/api/portraits/men/45.jpg"
                                alt="John"
                            />
                            <div>
                                <h3>John</h3>
                                <span>@johnwithbeard</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>

                    </li>
                    <li>
                        <div className={styles.userInfo}>
                            <img
                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                alt="Jo B"
                            />
                            <div>
                                <h3>Jo B</h3>
                                <span>@saas_boss</span>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </li>
                </ul>
                <Link className={styles.showMore} href="#showMore">Show more</Link>
            </div>
            <div className={styles.footerLinks}>
                <Link href="#termsOfService">Terms of Service</Link> . <Link href="#privacyPolicy">Privacy Policy</Link>.{""}
                <Link href="#cookiePolicy">Cookie Policy</Link> . <Link href="#accessibility">Accessibility</Link>.{""}
                <Link href="#adsInfo">Ads Info</Link> . <Link href="#more">More...</Link>.{""}
                <p>c 2025 X Corp.</p>
            </div>
        </div>
    )
}
export default RightSidebar;