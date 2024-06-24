import Header from "./header";
import Footer from "./footer";
import ContactSection from './Contactsection';
import React, { useState } from 'react';
import styles from '../styles/Schedule.module.css';


function Schedule() {
    const [selectedTab, setSelectedTab] = useState('Monday');

    const tabs = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (

        <>
            <Header />
            <main className="content" >

                <div className={styles.container}>
                    <h1 className={styles.schedulecontent} style={{ textAlign: 'center', background: '#007bff' }} > Swahilipot FM Schedule</h1>
                    <div className={styles.tabs}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={selectedTab === tab ? styles.active : ''}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className={styles.schedulecontent}>
                        {/* Content for the selected tab */}
                        {selectedTab === 'Monday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">04:00 - 08:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Chris & Rahma</span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 1" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 2" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">08:00 - 12:00</span>
                                    <span className="title">Patanisho</span>
                                    <span className={styles.voiceover}>Voiceover by: <br /> Amiandah & Joy</span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">12:00 - 16:00</span>
                                    <span className="title">Wicked edition</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Aaron & Cartoon
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">16:00 - 20:00</span>
                                    <span className="title">Pwani Mseto</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Sharon & Awadh
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">20:00 - 00:00</span>
                                    <span className="title">Urbanhits</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Ismael & Beth
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                
                                
                                {/* Add more schedule items for Monday */}
                            </div>
                        )}

                        {/* Add content for Tuesday */}
                        {selectedTab === 'Tuesday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">04:00 - 08:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Chris & Joy
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 3" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 4" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">08:00 - 12:00</span>
                                    <span className="title">Patanisho</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Aaron & Beth
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">12:00 - 16:00</span>
                                    <span className="title">Pwani Mseto</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Awadh & Sharon
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">16:00 - 20:00</span>
                                    <span className="title">Sports & Reggae</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Kesh & Kevin
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">20:00 - 00:00</span>
                                    <span className="title">The Mash up</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Cartoon & Mercy
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                
                                {/* Add more schedule items for Tuesday */}
                            </div>
                        )}

                        {/* Add content for Wednesday */}
                        {selectedTab === 'Wednesday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">04:00 - 08:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Ismael & Sanaipei
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 5" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 6" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">08:00 - 12:00</span>
                                    <span className="title">Patanisho</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Imali & Andrew
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">12:00 - 16:00</span>
                                    <span className="title">Pwani Mseto</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Achinga & Mercy
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">16:00 - 20:00</span>
                                    <span className="title">Reggae & Sports</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Gladys & Dennis
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">20:00 - 00:00</span>
                                    <span className="title">Rhumba Lady's Night</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Zippy & Kesh
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                
                                {/* Add more schedule items for Wednesday */}
                            </div>
                        )}
                        {/* Add content for Thursday */}
                        {selectedTab === 'Thursday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">04:00 - 08:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Aaron & Rehema
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 7" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 8" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">08:00 - 12:00</span>
                                    <span className="title">Patanisho</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Ayubu & Rahma
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">12:00 - 16:00</span>
                                    <span className="title">Oldschool</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Riziki & Amiandah
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">16:00 - 20:00</span>
                                    <span className="title">Mash up</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Cartoon & Naweza
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">20:00 - 00:00</span>
                                    <span className="title">Throwback Thursday</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Angela & Boutress
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                
                                {/* Add more schedule items for Thursday */}
                            </div>
                        )}

                        {/* Add content for Friday */}
                        {selectedTab === 'Friday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">04:00 - 08:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Jesse & Jessy
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 9" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 10" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">08:00 - 12:00</span>
                                    <span className="title">Patanisho</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Peter & Mercy
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">12:00 - 16:00</span>
                                    <span className="title">Pwani Mseto</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Awadh & Gladys
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">16:00 - 20:00</span>
                                    <span className="title">Reggae & Sports</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Beth & Ismael
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">20:00 - 00:00</span>
                                    <span className="title">Lingala</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Awadh & Sharon
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                               
                                {/* Add more schedule items for Friday */}
                            </div>
                        )}

                        {/* Add content for Saturday */}
                        {selectedTab === 'Saturday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">04:00 - 08:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Kevin & Kesh
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 11" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 12" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">08:00 - 12:00</span>
                                    <span className="title">Stra8up </span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Amiandah & Joylenne
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">12:00 - 16:00</span>
                                    <span className="title">Maisha kikwetu</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Chris & Rahma
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">16:00 - 20:00</span>
                                    <span className="title">Reggae</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Rehema & Ayubu
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>

                                <div className={styles.scheduleitem}>
                                    <span className="time">20:00 - 00:00</span>
                                    <span className="title">Dancehall</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Achinga & Mercy
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                
                                {/* Add more schedule items for Saturday */}
                            </div>
                        )}


                        {/* Add content for Sunday */}
                        {selectedTab === 'Sunday' && (
                            <div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">04:00 - 08:00</span>
                                    <span className="title">The Breakfast Vibe</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Aaron & Achinga
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">08:00 - 12:00</span>
                                    <span className="title">Gospel</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Beth & Brown
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">12:00 - 16:00</span>
                                    <span className="title">Testimonies</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Kesh & Faith
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">16:00 - 20:00</span>
                                    <span className="title">Urban hits</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Imali & Ismael
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                <div className={styles.scheduleitem}>
                                    <span className="time">20:00 - 00:00</span>
                                    <span className="title">Rhumba</span>
                                    <span className={styles.voiceover}>
                                        Voiceover by: <br /> Herman & Joash
                                    </span>
                                    <span>
                                        <img src="ruto.jpg" alt="Presenter 13" className={styles.presenterImage} />
                                        <img src="ruto.jpg" alt="Presenter 14" className={styles.presenterImage} />
                                    </span>
                                </div>
                                
                                {/* Add more schedule items for Sunday */}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <ContactSection />
            <Footer />
            <style jsx>{`
        .content {
          padding-top: 100px; /* Adjust this value according to your header height */
          padding-bottom: 60px; /* Adjust this value according to your footer height */
          min-height: 100vh; /* Ensures the content area takes up at least the full height of the viewport */
          box-sizing: border-box;
        }
      `}</style>
        </>
    );
}

export default Schedule;



