import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
class ImageGalleryComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>At another glance...</h2>
                <Carousel autoPlay interval="4000" transitionTime="600">
                    <div className="singleProductCarousel">
                        <img src={this.props.imageOnes} alt='other product angles' />
                    </div>
                    <div className="singleProductCarousel">
                        <img src={this.props.imageTwos} alt="other product angles" />
                    </div>
                    <div className="singleProductCarousel">
                        <img src={this.props.imageThrees} alt="other product angles"/>
                    </div>
                    <div className="singleProductCarousel">
                        <img src={this.props.imageFours} alt="other product angles"/>
                    </div>
                    <div className="singleProductCarousel">
                        <img src={this.props.imageFives} alt="other product angles"/>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGalleryComponent;