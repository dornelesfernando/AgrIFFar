import styles from './Dashboard.module.css';
import Aside from './Farmer/layout/Aside';


function Dashboard() {
  return (
    <>
        <div className={styles.container}>
            <Aside />
            
            {/*
            <main>
                <header>
                    <button className={styles.menu-btn" id="menu-open">
                        <i className='bx bx-menu'></i>
                    </button>
                    <h5>Hello <b>REZA</b>, welcome back!</h5>
                </header>

                <div className={styles.separator">
                    <div className={styles.info">
                        <h3>My Courses</h3>
                        <a href="#">View All</a>
                    </div>
                    <div className={styles.search">
                        <i className='bx bx-search'></i>
                        <input type="text" placeholder="Search...">
                    </div>
                </div>

                <div className={styles.analytics">
                    <div className={styles.item">
                        <div className={styles.progress">
                            <div className={styles.info">
                                <h5>Locations</h5>
                                <p>35 Lessons</p>
                            </div>
                            <div className={styles.progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <i className='bx bx-map-pin'></i>
                    </div>
                    <div className={styles.item">
                        <div className={styles.progress">
                            <div className={styles.info">
                                <h5>People</h5>
                                <p>30 Lessons</p>
                            </div>
                            <div className={styles.progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <i className='bx bx-user-voice'></i>
                    </div>
                    <div className={styles.item">
                        <div className={styles.progress">
                            <div className={styles.info">
                                <h5>Airport</h5>
                                <p>45 Lessons</p>
                            </div>
                            <div className={styles.progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <i className='bx bxs-plane-land'></i>
                    </div>
                    <div className={styles.item">
                        <div className={styles.progress">
                            <div className={styles.info">
                                <h5>Places</h5>
                                <p>20 Lessons</p>
                            </div>
                            <div className={styles.progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <i className='bx bxs-castle'></i>
                    </div>
                </div>

                <div className={styles.separator">
                    <div className={styles.info">
                        <h3>Planning</h3>
                        <a href="#">View All</a>
                    </div>
                    <input type="date" value="2023-10-15">
                </div>

                <div className={styles.planning">
                    <div className={styles.item">
                        <div className={styles.left">
                            <div className={styles.icon">
                                <i className='bx bx-book-alt'></i>
                            </div>
                            <div className={styles.details">
                                <h5>Reading - Topic 1</h5>
                                <p>8:00 - 10:00</p>
                            </div>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </div>
                    <div className={styles.item">
                        <div className={styles.left">
                            <div className={styles.icon">
                                <i className='bx bx-edit-alt'></i>
                            </div>
                            <div className={styles.details">
                                <h5>Writing - Topic 2</h5>
                                <p>13:00 - 14:00</p>
                            </div>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </div>
                    <div className={styles.item">
                        <div className={styles.left">
                            <div className={styles.icon">
                                <i className='bx bx-headphone'></i>
                            </div>
                            <div className={styles.details">
                                <h5>Listening - Topic 1</h5>
                                <p>15:00 - 16:00</p>
                            </div>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </div>
                    <div className={styles.item">
                        <div className={styles.left">
                            <div className={styles.icon">
                                <i className='bx bx-volume-low'></i>
                            </div>
                            <div className={styles.details">
                                <h5>Listening - Topic 2</h5>
                                <p>19:00 - 20:00</p>
                            </div>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </div>
                </div>
            </main>

            <aside className={styles.right-section">
                <div className={styles.top">
                    <i className='bx bx-bell'></i>
                    <div className={styles.profile">
                        <div className={styles.left">
                            <img src="assets/profile.jpg">
                            <div className={styles.user">
                                <h5>Reza Mehdikhanlou</h5>
                                <a href="#">Basic Plan</a>
                            </div>
                        </div>
                        <i className='bx bxs-chevron-right'></i>
                    </div>
                </div>

                <div className={styles.separator" id="first">
                    <h4>Statistics</h4>
                </div>

                <div className={styles.stats">
                    <div className={styles.item">
                        <div className={styles.top">
                            <p>Courses</p>
                            <p>Completed</p>
                        </div>
                        <div className={styles.bottom">
                            <div className={styles.line"></div>
                            <h3>02</h3>
                        </div>
                    </div>
                    <div className={styles.item">
                        <div className={styles.top">
                            <p>Total Points</p>
                            <p>Gained</p>
                        </div>
                        <div className={styles.bottom">
                            <div className={styles.line"></div>
                            <h3>250</h3>
                        </div>
                    </div>
                    <div className={styles.item">
                        <div className={styles.top">
                            <p>Courses</p>
                            <p>In Progress</p>
                        </div>
                        <div className={styles.bottom">
                            <div className={styles.line"></div>
                            <h3>03</h3>
                        </div>
                    </div>
                    <div className={styles.item">
                        <div className={styles.top">
                            <p>Tasks</p>
                            <p>Finished</p>
                        </div>
                        <div className={styles.bottom">
                            <div className={styles.line"></div>
                            <h3>250</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.separator">
                    <h4>Weekly Work</h4>
                </div>

                <div className={styles.weekly">
                    <div className={styles.title">
                        <div className={styles.line"></div>
                        <h5>Tasks This Week</h5>
                    </div>
                    <div className={styles.progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>

            </aside>
                    */}
        </div>
    </>
  );
}

export default Dashboard;