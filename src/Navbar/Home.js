import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div>
      {/* main container of whole page */}
      <div className="home-container">
        <div className="home-content">
          <div className="home-box">
            <h2>
              <span id="brk-1">
                Build your own <i> virtual </i>
              </span>
              <span id="brk-2">
                <i>Gallery</i> with
              </span>
              <span id="brk-3"> MEGAWIDTH </span>
            </h2>
            <div>
              <button className="home-box-create">Create</button>
            </div>
          </div>
        </div>

        {/* Demo static gallery  */}
      </div>
      <div className="demo-gallery">
        <div className="own-header">
          <h4 className="own-text">
            <ReactTypingEffect
              text={"Design your own gallery with our advanced AI tools. "}
              // cursor={'.'}
            />
          </h4>
        </div>
        <div className="gallery-demo">
          <div className="gallery-demo-one">
            <img
              src="./assets/jack-hamilton-AUgTvvQxDhg-unsplash.jpg"
              alt="pic1"
            />
            <img
              src="./assets/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg"
              alt="pic2"
            />
          </div>
          <div className="gallery-demo-two">
            <img
              src="./assets/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg"
              alt="pic3"
            />
            <img src="./assets/eric-park-QbX8A8eHfzw-unsplash.jpg" alt="pic3" />
          </div>
        </div>
      </div>
      {/* Last part */}
      <div className="main-last-part">
        <div className="last-part-content">
          <h3>Explore our other  products</h3>
          <div className="content-cards">
            <img src="./assets/eftakher-alam-i1VQZsU86ok-unsplash (1).jpg" alt="pr1"/>
          </div>
          <div className="content-cards">
         <img src="./assets/igor-miske-JVSgcV8_vb4-unsplash.jpg" alt="pr1"/>
       </div>
       <div className="content-cards">
         <img src="./assets/daniel-korpai-pKRNxEguRgM-unsplash.jpg" alt="pr1"/>
       </div>
       <div className="content-cards">
         <img src="./assets/jonathan-borba-9uCmnwC2KR4-unsplash.jpg" alt="pr1"/>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
