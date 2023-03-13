import classes from "./index.module.css";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { RiHeart3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

const Products = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(true);

  useEffect(() => {});
  return (
    <div className={classes.main1}>
      {data.map((item, index) => (
        <div className={classes.main}>
          <div key={index} className="relative p-2">
            <div>
              <button
                className={`p-0 rounded-full absolute text-xl top-3 right-3`}
                onClick={toggleLike}
              >
                {/* {onRed ? <FaRegHeart /> : <RiHeart3Fill />} */}
                <RiHeart3Fill
                  style={{
                    color: `${liked ? "text-red-500" : "text-gray-100"}`,
                  }}
                  className="p-0 rounded-full absolute text-xl top-3 right-3"
                />
              </button>
            </div>
            <div className="">
              <Link className="" href="/item/[id]" as={`/item/${item.id}`}>
                <img
                  src={item.image}
                  className="object-cover mx-auto  align-center h-[80px]  mt-6"
                ></img>
              </Link>
            </div>
            <Link href="/item/[id]" as={`/item/${item.id}`}>
              <div className={classes.title}>
                <h3>{item.title}</h3>
              </div>
            </Link>
            <div className="relative flex gap-3">
              <div className="absolute left-2 top-7 font-bold text-[20px]">
                <p>$ {item.price}</p>
              </div>
              <div>
                <Link
                  href="/"
                  className="absolute bg-pink-500 hover:bg-pink-600 p-2 rounded-md content-end right-2 top-6"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
