import img from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns/esm';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        // <section className='' style={{ background: `url(${img})` }}>
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} alt='' className=" rounded-lg shadow-2xl w-1/2" />
                <div className='px-20'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
        // </section>
    );
};

export default AppointmentBanner;