import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./assets/honk.jpg" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="./assets/kakao.webp" />
                    <p className="legend">Makao</p>
                </div>
                <div>
                    <img src=".\assets\newyolk.webp" />
                    <p className="legend">New York</p>
                </div>
                <div>
                    <img src=".\assets\tower.webp" />
                    <p className="legend">Japan</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel