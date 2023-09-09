import "./explore.css";
import Navbar from "../Navbar";
import Announcement from "../Announcement";
import image from "../../Assets/skeleton.png";
import one from "../../Assets/001.jpeg";
import two from "../../Assets/icons.png";
import bone from "../../Assets/bone.jpeg";

const Explore = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="explore">
        <div>
          <h1>
            The <span className="ser">digital</span> <br /> product market{" "}
            <br />& development <br />
            website
          </h1>
          <p>
            We can help you with everything on product <br />
            search solution and planing content strategy
          </p>
          <button className="button-ex">GET STARTED</button>
        </div>
        <div>
          <img src={image} alt="image" />
        </div>
      </div>

      <div className="explore-sub">
        <div className="explore-second">
          <img src={two} alt="" />
          <h1>
            Welcome To Bayz <br /> Product Store
          </h1>
        </div>
      </div>

      <div className="classy">
        <div className="classic">
          <img src={one} alt="" />
        </div>
        <div className="bone">
          <img src={bone} alt="" />
        </div>
      </div>

      <div className="explore-third">
        <div className="exploreTd">
          <h1>
            <span className="ser">Services</span> <br /> we can <br />
            help you <br /> with
          </h1>
          <div className="category-first">
            <h3>Services Provided by Bayz_Store:</h3>
            <p>
              Take a chance and be sure that you are in the right <br /> hands!
              We do any services and provide an individual <br /> approach for
              every customer.
            </p>

            <div className="category">
              <div>
                <h4>Trendy</h4>
                <h4>Fashion</h4>
                <h4>Modelling</h4>
                <h4>Cart</h4>
                <h4>Accessories</h4>
              </div>
              <div>
                <h4>Wishlist</h4>
                <h4>My Acccount</h4>
                <h4>Order Tracking</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="#254977" />
            <use
              href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />

            <use
              href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />

            <use href="#gentle-wave" x="48" y="7" fill="#a0aad0" />
          </g>
        </svg>
      </div>
      <div class="rem"></div>
    </div>
  );
};

export default Explore;
