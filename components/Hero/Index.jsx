import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#ffe7cc] m-[10px] rounded-md my-8">
      <div>
        <h1 className="m-4 text-gray-700 font-bold text-[30px]">
          Grab Upto 50% Off On <br /> These Selected Items
        </h1>
      </div>
      <div>
        <button
          href="/"
          className="bg-pink-500 mx-4 my-4 px-[10px] py-[2px] hover:bg-pink-700 text-[26px] font-bold rounded-md"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
