import React from "react";
import Link from 'next/link';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: "99",
      hours: "99",
      minutes: "99",
      seconds: "99",
      deadline: new Date("December 23, 2020 22:00:00"),
    };
  }


  componentDidMount() {
    // Run updateClock() every second.
    this.interval = setInterval(() => this.updateClock(), 1000);

  }

  componentWillUnmount() {
    // Stop the countdown if the component is unmounted.
    clearInterval(this.interval);
  }

  getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  updateClock() {
    var t = this.getTimeRemaining(this.state.deadline);

    this.setState({
      days: t.days,
      hours: ('0' + t.hours).slice(-2),
      minutes: ('0' + t.minutes).slice(-2),
      seconds: ('0' + t.seconds).slice(-2)
    });

    if (t.total <= 0) {
      // Stop the countdown when we've reached the next round.
      clearInterval(this.interval);
    }
  }


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col></Col>
            
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src="/img/damir-bosnjak.jpg"
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src="/img/keshav.jpg"
                      />
                      <h5 className="title">Keshav Maheshwari</h5>
                    </a>
                    <p className="description">@keshavm02</p>
                  </div>
                  
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          2 <br />
                          <small>Assasinated</small>
                        </h5>
                      </Col>
                      
                    </Row>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Info</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src="/img/default-avatar.png"
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          John Chai <br />
                          <span className="text-success">
                            <small>Target</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src="/img/default-avatar.png"
                            />
                          </div>
                        </Col>
                        <Col className="col-ms-7" xs="7">
                          Warren Partridge <br />
                          <span className="text-danger">
                            <small>Assasin</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          
                        </Col>
                      </Row>
                    </li>
                  </ul>


                  <div>Time until the round closes:</div>
                  <div id="clock">
                    <div className="days">{this.state.days}</div>
                    <div>:</div>
                    <div className="hours">{this.state.hours}</div>
                    <div>:</div>
                    <div className="minutes">{this.state.minutes}</div>
                    <div>:</div>
                    <div className="seconds">{this.state.seconds}</div>
                  </div>


                </CardBody>
              </Card>
            </Col>

            <Col></Col>
            {/* <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Edit Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue="Creative Code Inc."
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue="michael23"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue="Chet"
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Faker"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue="Melbourne, Australia"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue="Melbourne"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="Australia"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            type="textarea"
                            defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Update Profile
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </div>
      </>
    );
  }
}
export default User;

// export default function User() {
//   return (
//     <div>
//       <Card style={{width: '20rem'}}>
//         <CardImg top src="img-src" alt="..."/>
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button color="primary">Go somewhere</Button>
//         </CardBody>
//       </Card>
//       <Link href="/">
//         <a>Back</a>
//       </Link>
//     </div>
//   );
// }