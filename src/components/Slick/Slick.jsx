import Slider from "react-slick";
import Product from "../Product/Product";
import "./slick.scss";
import uuid from "react-uuid";

export default function (props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
      {props.list.map((element) => {
          return <Product key={uuid()} product={element} />;
        })}
      </Slider>
    </>
  );
}
