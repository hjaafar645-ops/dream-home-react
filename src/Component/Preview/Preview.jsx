import "../Preview/Preview.css"
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
function Preview() {
    const [swiperRef, setSwiperRef] = useState(null);
    return (
        <div>
            <section className="container-fluid">
                <div className="header-section-title">
                    <h2 className='preview-prop'> Featured Properties </h2>
                    <span className="line-title"></span>
                </div>
                <div className="preview-content">
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        modules={[Pagination, Navigation, Autoplay]}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        speed={6000}
                        breakpoints={{
                            991: { slidesPerView: 3 },
                            767: { slidesPerView: 2 },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide className="swiper-cards">
                            <div className="card-content">
                                <img src="/Images/modernVilla.jpg" alt="modern-house" className="image-swiper-card"></img>
                                <h3> Modern Villa </h3>
                                <h4> London </h4>
                                <p> month / 2,700$ </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-cards">
                            <div className="card-content">
                                <img src="/Images/dublexAppartement2.jpg" alt="modern-house" className="image-swiper-card"></img>
                                <h3> Dublex Apartment </h3>
                                <h4> London </h4>
                                <p> month / 2,200$ </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-cards">
                            <div className="card-content">
                                <img src="/Images/mansion.jpg" alt="modern-house" className="image-swiper-card"></img>
                                <h3> Luxury Mansion </h3>
                                <h4> London </h4>
                                <p> month / 5000$ </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-cards">
                            <div className="card-content">
                                <img src="/Images/dublexAppartement.jpg" alt="modern-house" className="image-swiper-card"></img>
                                <h3> Dublex Apartment </h3>
                                <h4> London </h4>
                                <p> month / 3000$ </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-cards">
                            <div className="card-content">
                                <img src="/Images/modernHouse2.jpg" alt="modern-house" className="image-swiper-card"></img>
                                <h3> Modern House </h3>
                                <h4> London </h4>
                                <p> month / 2,300$ </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="mobile-cards">
                        <div className="card-content">
                            <img src="/Images/modernVilla.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Modern Villa </h3>
                            <h4> London </h4>
                            <p> month / 2,700$ </p>
                        </div>

                        <div className="card-content">
                            <img src="/Images/dublexAppartement2.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Dublex Apartment </h3>
                            <h4> London </h4>
                            <p> month / 2,200$ </p>
                        </div>

                        <div className="card-content">
                            <img src="/Images/mansion.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Luxury Mansion </h3>
                            <h4> London </h4>
                            <p> month / 5000$ </p>
                        </div>

                        <div className="card-content">
                            <img src="/Images/dublexAppartement.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Dublex Apartment </h3>
                            <h4> London </h4>
                            <p> month / 3000$ </p>
                        </div>

                        <div className="card-content">
                            <img src="/Images/modernHouse2.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Modern House </h3>
                            <h4> London </h4>
                            <p> month / 2,300$ </p>
                        </div>
                    </div>

                    <div className="tablet-cards">
                        <div className="card-content">
                            <img src="/Images/modernVilla.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Modern Villa </h3>
                            <h4> London </h4>
                            <p> month / 2,700$ </p>
                        </div>

                        <div className="card-content">
                            <img src="/Images/dublexAppartement2.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Dublex Apartment </h3>
                            <h4> London </h4>
                            <p> month / 2,200$ </p>
                        </div>

                        <div className="card-content">
                            <img src="/Images/mansion.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Luxury Mansion </h3>
                            <h4> London </h4>
                            <p> month / 5000$ </p>
                        </div>

                        <div className="card-content">
                            <img src="/Images/dublexAppartement.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Dublex Apartment </h3>
                            <h4> London </h4>
                            <p> month / 3000$ </p>
                        </div>

                        <div className="card-content">
                            <img src="/Images/modernHouse2.jpg" alt="modern-house" className="image-swiper-card"></img>
                            <h3> Modern House </h3>
                            <h4> London </h4>
                            <p> month / 2,300$ </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Preview