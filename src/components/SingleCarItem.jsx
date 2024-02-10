import React, { useEffect, useState } from "react";
import { BsSpeedometer } from "react-icons/bs";
import { GiGps } from "react-icons/gi";
import { IoCarOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import carData from "../assets/data/carData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/bookSlice";
import Skeleton from "react-loading-skeleton";
import SingleCarItemSkeleton from "./SingleCarItemSkeleton";
import ReactImageMagnify from 'react-image-magnify';

const SingleCarItem = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { id } = useParams();
  const car = carData.find((car) => car.id === parseInt(id, 10));
  const { imgUrl, carName, price, model, gps, speed, seatType, automatic } = car;
  const [carImg, setCarImg] = useState(imgUrl[0])


  if (!car) {
    console.log("Car not found");
    return <div>Car not found</div>;
  }

  const dispatch = useDispatch();
  const products = useSelector((state) => state.book.products);

  return (
    <>
      {loading ? (
        <SingleCarItemSkeleton />
      ) : (
        <div className="w-full px-20 flex flex-col md:flex-row md:justify-center gap-10 py-4">
          <div className="flex items-center justify-center gap-5">
          <div className="flex flex-col gap-2">
            <img src={imgUrl[0]} className="h-[100px] bg-slate-400 rounded-sm cursor-pointer p-2" onClick={()=> setCarImg(imgUrl[0])} alt="" />
            <img src={imgUrl[1]} className="h-[100px] bg-slate-400 rounded-sm cursor-pointer p-2" onClick={()=> setCarImg(imgUrl[1])} alt="" />
            <img src={imgUrl[2]} className="h-[100px] bg-slate-400 rounded-sm cursor-pointer p-2" onClick={()=> setCarImg(imgUrl[2])} alt="" />
          </div>
          {/* <img src={carImg} alt="" className="" /> */}
          <div>
<ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: carImg
    },
    largeImage: {
        src: carImg,
        width: 1800,
        height: 1200
    }
}} />
          </div>
          </div>
          <div className="flex flex-col  gap-3 items-start">
            <h2 className="text-center text-blue-500 font-medium">{carName}</h2>
            <h4 className="text-[13px] font-semibold text-center">
              ${price}.00 / Day
            </h4>
            <div className="flex flex-col justify-center">
              <p className="text-[11px] flex items-center gap-1">
                <span>
                  <IoCarOutline />
                </span>
                {model}
              </p>
              <p className="text-[11px] flex items-center gap-1">
                <span>
                  <GiGps />
                </span>
                {gps}
              </p>
              <p className="text-[11px] flex items-center gap-1">
                <span>
                  <BsSpeedometer />
                </span>
                {speed}
              </p>
            </div>
            <button
              className="w-1/2 bg-blue-600 text-white text-xs py-[3px] rounded-sm"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    carName: carName,
                    price: price,
                    image: carImg,
                  })
                )
              }
            >
              RENT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCarItem;
