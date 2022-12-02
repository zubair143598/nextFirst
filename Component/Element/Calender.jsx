import { BiNotepad } from "react-icons/bi";
const Calender = () => {
  return (
    <div className="Calender-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="head1">STAY SHARP WITH UPCOMING EVENTS</h3>
            <h1 className="head2">SOMNIUM EVENTS CALENDAR</h1>
            <h3 className="head1 pt-1">
              Have Fun and Share with your Friends our Weekly and Special Events
            </h3>
          </div>
        </div>
        <div
          className="row"
          style={{ padding: " 5rem", marginBottom: "-20px" }}
        >
          <div className="col-lg-1"></div>
          <div className="col-lg-5 text-center mt-5">
            <p className="border-bottom my-5 p1">Featured Events</p>
            <img src="./Assists/calender1.png" className="img1" alt="" />
            <br />
            <img src="./Assists/calender2.png" className="img2" alt="" />
          </div>
          <div className="col-lg-6 mt-5">
            <p className="border-bottom my-5 p1">Events calendar</p>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=somnium.space.events%40gmail.com"
              width={700}
              height={500}
              scrolling="no"
              style={{ border: "0px", borderRadius: "5px" }}
            />
            <button className="btn1">Add Event</button>
            <button className="btn1 ms-4 btn2">
              <BiNotepad /> Export Google Calender
            </button>

            {/* <p className="mb-5"></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
