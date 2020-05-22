import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={3}>
            <div style={{ textAlign: "center" }}>
              <img
                src={process.env.PUBLIC_URL + "/images/avatar.png"}
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2
              style={{
                paddingTop: "0.5em",
                fontFamily: "Pacifico",
                textAlign: "center",
              }}
            >
              Manoj Gowda
            </h2>
            <h4
              style={{
                color: "grey",
                fontFamily: "Pacifico",
                textAlign: "center",
              }}
            >
              Programmer
            </h4>
            <hr style={{ borderTop: "3px solid grey", width: "100%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid grey", width: "100%" }} />
            <h5 style={{ textAlign: "center", fontFamily: "Pacifico" }}>
              Address
            </h5>
            <p>
              #201, 6th Main, Annapoorneshwari L/O, Ullal Main Road, Bengaluru -
              560056
            </p>
            <h5
              style={{
                textAlign: "center",
                fontFamily: "Pacifico",
                textAlign: "center",
              }}
            >
              Phone
            </h5>
            <p style={{ textAlign: "center" }}>+91{720} 428-7452</p>
            <h5
              style={{
                textAlign: "center",
                fontFamily: "Pacifico",
                textAlign: "center",
              }}
            >
              e-mail
            </h5>
            <p style={{ textAlign: "center" }}>vmanojgowda27@gmail.com</p>
            <h5
              style={{
                textAlign: "center",
                fontFamily: "Pacifico",
                textAlign: "center",
              }}
            >
              Web
            </h5>
            <p style={{ textAlign: "center" }}>www.mg9729.tech</p>
            <hr style={{ borderTop: "3px solid grey", width: "100%" }} />
          </Cell>
          <Cell col={9} className="resume-right-col">
            <h2 style={{ fontFamily: "Pacifico" }}>Education</h2>
            <p style={{ padding: "1em" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <Education
              startYear={2000}
              endYear={2008}
              schoolName="Parachute Regiment School"
              schoolDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <Education
              startYear={2008}
              endYear={2013}
              schoolName="V.S.S International Public School"
              schoolDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <Education
              startYear={2013}
              endYear={2015}
              schoolName="Narayana P.U. College"
              schoolDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <Education
              startYear={2015}
              endYear={2019}
              schoolName="S.J.B Institute of Technology"
              schoolDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <hr style={{ borderTop: "3px solid white", width: "100%" }} />
            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Associate Web Designer"
              jobDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Full Stack Web Developer"
              jobDescription="There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable."
            />
            <hr style={{ borderTop: "3px solid white" }} />
            <Skills skill="JavaScript" progress={90} />
            <Skills skill="NodeJS" progress={80} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="C++" progress={70} />
            <Skills skill="PHP" progress={50} />
            <Skills skill="React" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
