import styled from 'styled-components';
import Slider from 'react-slick';

export default ({images}) => {
  const settings = {
    dot: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  const SliderImages = images.map((image) => 
    <div className="sliderImg" key={image.url}>
      <img src={image.url} />
    </div>
  )
  return (
    <Slider {...settings}>
      {SliderImages}
    </Slider>
  )
}