import classes from "./index.module.css";
import Link from 'next/link'

const Products = ({ data }) => {
  return (
    <div className={classes.main1}>
      {data.map((item, index) => (
        <div className={classes.main}>
          <div key={index} className={classes.main3}>
            <div className={classes.imagediv}>
            <Link href="/item/[id]" as={`/item/${item.id}`}><img src={item.image} className={classes.img} /></Link>
            </div>
            <Link href="/item/[id]" as={`/item/${item.id}`}>
            <div className={classes.title}>
              <h3>{item.title}</h3>
            </div></Link>
            <div className={classes.pony}>
              <p >$ {item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
