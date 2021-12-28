import React from 'react'
import Slider from "react-slick";

const Trending = () => {
    const settings = {
        dots:false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

    return (
        <>
        <div className="container-fluid shadow-lg my-4 py-5">
        <Slider {...settings}>
          <div>
           <img src="/images/a.jpg" className="img-fluid custom-slide" alt="" />
          </div>
          <div>
          <img src="/images/b.jpg" className="img-fluid custom-slide" alt="" />
          </div>
          <div>
          <img src="/images/c.jpg" className="img-fluid custom-slide" alt="" />
          </div>
          <div>
          <img src="/images/d.jpg" className="img-fluid custom-slide" alt="" />
          </div>
          <div>
          <img src="/images/e.jpg" className="img-fluid custom-slide" alt="" />
          </div>
          <div>
          <img src="/images/f.jpg" className="img-fluid custom-slide" alt="" />
          </div>
          <div>
          <img src="/images/g.jpg" className="img-fluid custom-slide" alt="" />
          </div>
          <div>
          <img src="/images/h.jpg" className="img-fluid custom-slide" alt="" />
          </div>
        </Slider>

        </div>
            
        </>
    )
}

export default Trending
