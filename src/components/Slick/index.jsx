import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import image1 from '../../assets/images/1.png'
import image2 from '../../assets/images/2.png'
import image3 from '../../assets/images/3.png'
import { categoryApi } from '../../Api/categoryApi'
import { AppUrl } from "../../Api/AppUrl";
import { Link } from "react-router-dom";
import CardCategory from "./CardCategory";

export default function SimpleSlider(props) {
  console.log(props);
  const [categorys, setCategorys] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await categoryApi.getAll(props.paramsCategory);
      setCategorys(response.data.data);
    }
    fetchData()
  }, [])
  console.log(categorys);
  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {categorys.map(item => {
        return (
          <CardCategory key={item.id} id={item.id} image={item.attributes.image.data[0].attributes.url} name={item.attributes.categoryName} />
        )
      })}


    </Slider>
  );
}