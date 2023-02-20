import styles from "@/styles/Home.module.css";
import Products from "../../../components/products";

export const getStaticProps = async () => {
  const req = await fetch(`https://fakestoreapi.com/products`);
  const res = await req.json();
  if (!res) {
    return {
      notfound: true,
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return { props: { res } };
  }
};

// export const getStaticProps = async () => {
//   const req = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
//   const res = await req.json();
//   if (!res) {
//     return {
//       notfound: true,
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }
//   else {
//     return { props: { res } };
//   }
// };

const Store = ({ res }) => {
  return (
    <div className={styles.main}>
      <h1>Store</h1>
      <br />
      {<Products data={res} />}
    </div>
  );
};

export default Store;
