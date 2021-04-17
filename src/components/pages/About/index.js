import React from "react";
import "./style.css";


// React component that can receive a Ref
// const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//       {props.children}
//     </button>
//   ));

  const About = React.forwardRef((props, ref) => (
        <article className="about" id="about" ref={ref}>
            <div className="row">
                {/* <article className="col-12">
                    <div className="row"> */}
                        <section className="col-xs-12 col-sm-12 col-md-6 col-lg-6 porSect">
                            <img src={process.env.PUBLIC_URL + "/images/bw-portrait.jpg"} alt="Portrait of Manuel" id="portrait-image"></img>
                        </section>

                        <section className="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="about-container">
                            <div>
                                <h3>Full Stack Developer / Fried Chicken Addict</h3>
                                <hr></hr>
                                <p>
                                    Full Stack Developer that grew up in Dominican Republic and currently residing in
                                    Toronto, Canada.
                                    A developer with a background in Computer Engineering and a passion to learn new skills.
                                    Effective at utilizing time management and problem solving skills to accomplish
                                    objectives.
                                    Known among colleagues for strong collaboration and attention to details no matter the
                                    challenge.
                                </p>
                                {/* <section id="email-button">
                                    <p>Want to work with me?</p>
                                    <a href="mailto:manuel.leungchen@gmail.com">Message me</a>
                                </section> */}
                            </div>

                        </section>
                    {/* </div>
                </article> */}
            </div>
        </article>
    ))


export default About;