import pic from "../../../assests/images/about-pic.jpg";
import Image from "next/image";
import classes from "./index.module.css";

const About = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.about1}>
          <div>
            <h1>At our Core, we are here for you</h1>
          </div>
          <div>
            <h5>
              we want you to enjoy the experience of shopping in a store at the
              comfort of your home
            </h5>
          </div>
        </div>

        <div>
          <div className={classes.about2}>
            <Image src={pic} alt="" className={classes.img} />
            <div className={classes.desc}>
              <h2>Always at your service</h2>
              <h5>A simple click of our button is our aim</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
