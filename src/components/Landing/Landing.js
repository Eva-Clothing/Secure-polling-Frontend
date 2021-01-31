import React from "react";
import "./Landing.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button } from "@material-ui/core";
import Hero from "../../images/voting---election-removebg-preview.png";
import Pic1 from "../../images/image-vote.jpg";
import Pic2 from "../../images/image-data.jpg";
import Pic3 from "../../images/image-bargraph.png";
import Pic4 from "../../images/image-linegraph.jpg";
import { Link } from "react-router-dom";
import {signout,isAuthenticated} from "../../auth/helper"



function Landing() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-title">
          <h1>Polling App</h1>
        </div>

        <div className="navbar-links ml-3">
        
          <Link class ="link" to="/signin">
            Login
          </Link>
          <Link class ="link" to="/signup">
            SignUp
          </Link>
          {isAuthenticated()?<Link className="link" onClick={()=>{
              signout()
          }}>Logout</Link>:<div></div>  }
        </div>
      </nav>
      <div className="landing_page">
        <div className="landing_left">
          <img src={Hero} alt="" />
        </div>
        <div className="landing_right">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1>A Polling Application</h1>
            <h3>
              An Application having the versatile Functionality of managing the
              stats and presenting them in such a way that it gloom out the best
              results based on the data.
            </h3>
            <div>
              <div className="text-center text-lg-start">
                <a href="/instructions">
                  <Button color="secondary" variant="contained">
                    Lets Gets started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="function">
        <div className="img-card">
          <img src={Pic1} alt="" />
          <div className="content">
            <h2>Make Vote</h2>
          </div>
        </div>
        <div className="img-card">
          <img src={Pic2} alt="" />
          <div className="content">
            <h2>Data </h2> 
          </div>
        </div>
        <div className="img-card">
          <img src={Pic3} alt="" />
          <div className="content">
            <h2>Bar Graph</h2> 
          </div>
        </div>
        <div className="img-card">
          <img src={Pic4} alt="" />
          <div className="content">
            <h2> Line Graph</h2> 
          </div>
        </div>{" "}
        <div className="img-card">
          <img src={Pic1} alt="" />
          <div className="content">
            <h2>Rajesh Zuckerberg</h2> <p>Senior front-end dev</p>
          </div>
        </div>{" "}
        <div className="img-card">
          <img src={Pic1} alt="" />
          <div className="content">
            <h2>Rajesh Zuckerberg</h2> <p>Senior front-end dev</p>
          </div>
        </div>
      </div>
      <footer className="mastfoot">
        <div >
          <h3>Copyright of the Makers</h3>
          </div>
        <div className="footer_left">The Github repo is available at <GitHubIcon/></div>
          
            
          
      </footer>
    </>
  );
}

export default Landing;