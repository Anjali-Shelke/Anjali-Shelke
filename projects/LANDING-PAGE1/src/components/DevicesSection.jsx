// Swiper core components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// CSS
import "./DevicesSection.css";

// Images
import staticImg from "../assets/static-soundbox.png";
import dynamicImg from "../assets/dynamic-soundbox.png";
import pocketImg from "../assets/VG-smart pocket soundbox.png";
import hubImg from "../assets/VG Smart Ordering & Checkout Hub.png";

export default function DevicesSection() {
  return (
    <section className="devices-wrapper">
      <div className="devices-container"></div>

      <div className="devices-badge">OUR DEVICES</div>

      <div className="heading">
        <h2 className="devices-heading">
          Smart Devices That Power Your Payments
        </h2>
        <p className="devices-subheading">
          Multiple device options built to support every merchant payment
          scenario
        </p>
      </div>

      <Swiper
        modules={[Pagination, Mousewheel, Autoplay]}

        /* CORE */
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={30}

        /* AUTO SLIDE ✅ */
        autoplay={{
          delay: 900,                 // slides every 3.5s
          disableOnInteraction: false, // continue after swipe
          pauseOnMouseEnter: true,     // pause on hover
        }}

        /* INPUT */
        allowTouchMove={true}
        simulateTouch={true}
        grabCursor={true}

        /* TRACKPAD */
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}

        /* UX */
        speed={700}

        /* DOTS */
        pagination={{ clickable: true }}

        /* SAFETY */
        centeredSlides={false}
        watchOverflow={true}

        className="devices-swiper"
      >
        <SwiperSlide>
          <DeviceCard
            title="VG Static Payment Soundbox"
            desc="A reliable static soundbox that delivers instant voice alerts for every successful payment."
            image={staticImg}
            leftList={[
              "QR Code Payments",
              "Volume Adjustable",
              "Real-Time Broadcast",
              "Compact Size",
            ]}
            rightList={[
              "Dining Rooms",
              "Restaurants",
              "Convenience Stores",
              "Toll Stations",
            ]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <DeviceCard
            title="VG Dynamic Payment Soundbox"
            desc="A dynamic soundbox that announces real-time payment confirmation with smart, flexible connectivity."
            image={dynamicImg}
            leftList={[
              "Volume Adjustable",
              "Real-Time Broadcast",
              "QR Code + NFC Card Payments",
              "Amount Display & Input",
            ]}
            rightList={[
              "Restaurants",
              "Convenience Stores",
              "Supermarkets",
              "Shopping Malls",
              "Hotels",
              "Toll Stations",
            ]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <DeviceCard
            title="VG Smart Pocket Soundbox (with GPS)"
            desc="A compact smart soundbox with GPS tracking and secure connectivity for mobile merchants."
            image={pocketImg}
            leftList={[
              "QR Code + NFC Payments",
              "GPS Tracking",
              "Real-Time Broadcast",
              "CUG Calling",
            ]}
            rightList={[
              "Transportation",
              "Logistics",
              "Parking Lots",
              "Hawkers",
              "Gig Workers",
            ]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <DeviceCard
            title="VG Smart Ordering & Checkout Hub"
            desc="An all-in-one ordering and checkout hub designed for high-volume merchants."
            image={hubImg}
            leftList={[
              "Ordering",
              "Checkout",
              "Membership Management",
              "Queue Management",
            ]}
            rightList={[
              "Hotels",
              "Retail Chains",
              "Restaurants",
              "Logistics",
            ]}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

/* -------------------------------------
   DEVICE CARD
------------------------------------- */
function DeviceCard({ title, desc, image, leftList, rightList }) {
  return (
    <div className="device-card">
      {/* TOP */}
      <div className="device-top">
        <div className="device-text">
          <h3 className="device-title">{title}</h3>
          <p className="device-desc">{desc}</p>
        </div>

        <div className="device-image">
          <img src={image} alt={title} />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="device-bottom">
        <div className="list-block">
          <p className="list-title">KEY FUNCTIONS</p>
          <ul className="bullet-points">
            {leftList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="list-divider" />

        <div className="list-block">
          <p className="list-title">APPLICABLE SCENARIOS</p>
          <ul className="bullet-points1">
            {rightList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
