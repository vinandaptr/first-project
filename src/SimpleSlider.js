import React, { Component } from "react";
import Slider from "react-slick";
import image1 from './assets/sale2.jpg';
import image2 from './assets/collectioncropped.jpg';
import image3 from './assets/soon2cropped.jpg';


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            // fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img className="img" src={image1} alt="Logo" />
                    </div>
                    <div>
                        <img className="img" src={image2} alt="Logo" />
                    </div>
                    <div>
                        <img className="img" src={image3} alt="Logo" />
                    </div>
                    {/* <div>
                        <h3>4</h3>
                    </div> */}
                </Slider>
            </div>
        );
    }
}