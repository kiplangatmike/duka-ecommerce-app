//import {useRouter} from 'next/router'
// import styles from '../../../styles/Products.module.css'

//export const getServerSideProps = async (context) => {
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}/`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  const ids = data.map((item) => item.id);

  // needs to be formatted as a string!
  // { params: {id:'1', id:'2', id:'3'} }
  const paths = ids.map((item) => ({ params: { id: item.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

const Item = ({ data }) => {
  //const router = useRouter();
  //const {id} = router.query;
  //<h3>Post Number {id}</h3>

  return (
    <div className="w-[82%] mx-auto">
      <div className="flex">
        <div className="w-1/2">
          <h2 className="font-bold text-3xl">{data.title}</h2>
          <br />
          <p className=" my-[20px] mr-[70px] ">
            <img src={data.image} className="rounded-xl bg-white p-[100px]" />
          </p>
          <br />
          <p className="mr-2">image url: {data.image}</p>
        </div>

        <div className="content-center mt-[70px] text-lg w-1/2">
          <br />
          <p className="text-xl">category: {data.category}</p>
          <br />
          <p className="text-xl">description: {data.description}</p>
          <br />
          <p className="font-bold text-2xl">price: ${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
