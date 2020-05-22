import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="tag-line">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native |
                NodeJS | Express | MongoDB
              </p>
              <div className="social-links">
                {/* Linked In */}
                <a
                  href="https://www.linkedin.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a
                  href="https://www.github.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
