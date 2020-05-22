import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "300px",
              background:
                "url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover",
            }}
          ></CardTitle>
          <CardText>These Pojects are built using ReactJS Framework</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "300px",
              background:
                "url(https://res.cloudinary.com/teepublic/image/private/s--JXQnHLZT--/c_crop,x_10,y_10/c_fit,w_432/c_crop,g_north_west,h_747,w_540,x_-70,y_-130/l_upload:v1466696261:production:blanks:gke15gs6x5nuos4rotrd/fl_layer_apply,g_north_west,x_-433,y_-387/b_rgb:000000/c_limit,f_jpg,h_630,q_90,w_630/v1548577527/production/designs/4089096_0.jpg) center / cover",
            }}
          ></CardTitle>
          <CardText>These Pojects are built using NodeJS Framework</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "300px",
              background:
                "url(https://i.redd.it/31b2ii8hchi31.jpg) center / cover",
            }}
          ></CardTitle>
          <CardText>These Pojects are built using C++</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "300px",
              background:
                "url(https://sooluciona.com/wp-content/uploads/2019/01/Diferencias-entre-PHP-y-JavaScript.jpg) center / cover",
            }}
          ></CardTitle>
          <CardText>These Pojects are built using PHP and JavaScript</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "300px",
              background:
                "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg) center / cover",
            }}
          ></CardTitle>
          <CardText>These Pojects uses MongoDB</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(TabId) => this.setState({ activeTab: TabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
          <Tab>C++</Tab>
          <Tab>Php and JavaScript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
