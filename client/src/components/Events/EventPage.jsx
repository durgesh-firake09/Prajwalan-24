import { useEffect } from 'react';
import styles from './EventPage.module.css'
import demo from './demo.png'
import { useLocation } from 'react-router-dom';
function EventPage(props) {
    const location = useLocation();
    const eventDetails = location.state || {};
    const returnDate = (date) => {
        const d = new Date(date);
        let a = d.toDateString()
        a = a.split(" ")
        return a[1]+" "+a[2]+", "+a[3]
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // console.log(eventDetails);
    return (
        <div className="w-90 sm:mx-10 mx-6 my-20 px-20 py-10 rounded-lg backdrop-blur-sm bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,0%,60%,0)], bg-gradient-to-br from-[hsla(0,0%,50%,0.2)] to-[hsla(0,3%,93%,0.2)]">
            <div className='my-5 '>
                <div className={styles.eventPage}>
                    <div className={styles.eventLogoDiv}>
                        <img src={ eventDetails.logo} className='pt-4' alt="..." />
                        <div className="mt-2 text-3xl p-2 font-bold text-white text-center">{`${eventDetails.event_name}`}</div>
                        <p className='text-white text-center' >{`${eventDetails.tagline}`}</p>
                        <button disabled={true} id='b1' className="relative inline-flex my-4 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Registerations Coming Soon
                            </span>
                        </button>
                    </div>
                    <hr />
                    <div className={styles.info}>
                        <p className="text-white my-1 font-bold"><span>Description</span></p>
                        <p className="text-white my-1">{`${eventDetails.desc}`}</p>
                        <p className="text-white mt-4 font-bold">Entry Fees</p>
                        <p className="text-white my-1">{`Rs. ${eventDetails.fee} per team`}</p>
                        <p className="text-white mt-4 font-bold">Deadline</p>
                        {/* <p className="text-white my-1">25 February 2024</p> */}
                        <p className="text-white mt-4 font-bold">Event Date and Time</p>
                        <p className="text-white my-1">{returnDate(eventDetails.date) + " - " + eventDetails.time}</p>
                        <p className="text-white mt-4 font-bold">Venue</p>
                        <p className="text-white my-1">{eventDetails.venue}</p>
                    </div>

                </div>
            </div>
            <hr style={{ display: 'block', width: "100%", marginLeft: 'auto', marginRight: 'auto' }} className='my-5' />
            {/* <div className={styles.rules} style={{ marginBottom: "30px" }}>
                <h1 className='text-white text-xl my-4 font-bold'>Rules and Regulations</h1>
                <ul className="text-white">
                    
                        {eventDetails.rules?.map((rule, i) => (
                            <li key={i}>{rule}</li>
                        ))}
                    
                </ul>
            </div> */}
            <div />
        </div>
    )
}
export default EventPage;