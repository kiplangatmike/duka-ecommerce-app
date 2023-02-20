import classes from "./index.module.css";

const Products = ({ data }) => {
  return (
    <div className={classes.main1}>
      {data.map((item, index) => (
        <div className={classes.main}>
          <div key={index} className={classes.main3}>
            <div className={classes.imagediv}>
              <img src={item.image} className={classes.img} />
            </div>
            <div className={classes.title}>
              <h3>{item.title}</h3>
            </div>
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
