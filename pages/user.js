import React from "react";

import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { // All this data must come from the DB.
        name: "Keshav Maheshwari",
        profilePicURL: "http://www.keshavmaheshwari.us/images/me.jpg",
        target: "Warren Partridge",
        assassin: "John Chai",
        killcount: 2,
        rank: 13,
        totalRanks: 1337
      },
      countdown: {
        days: "99",
        hours: "99",
        minutes: "99",
        seconds: "99",
      },
      round: {
        deadline: new Date("December 23, 2020 22:00:00"), // This must come from the DB. We might keep a list of rounds.
        isSafeForNextRound: true, // A user is safe for the next round if they killed someone during the current round.
      }
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
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  updateClock() {
    let t = this.getTimeRemaining(this.state.round.deadline);

    this.setState({
      countdown: {
        days: t.days,
        hours: ('0' + t.hours).slice(-2),
        minutes: ('0' + t.minutes).slice(-2),
        seconds: ('0' + t.seconds).slice(-2)
      }
      });

      if (t.total <= 0) {
        // Stop the countdown when we've reached the next round.
        clearInterval(this.interval);
      }
  }


  render() {
    let nextRoundText = <Alert color="danger">
      <div className="d-flex justify-content-center">
        You still need to assassinate someone before the round ends... otherwise you're out.
      </div>
      </Alert>;

    if (this.state.round.isSafeForNextRound) {
      nextRoundText = <Alert color="success">
        <div className="d-flex justify-content-center">
          You're safe for the next round.
        </div>
      </Alert>;
    }


    return (
      <>
        <div className="content">
          <Row>
            <Col></Col>

            <Col md="4">
              <Card className="card-user">
                <div className="image">
                </div>
                <CardBody>
                  <div className="author">
                    <div>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src="http://www.keshavmaheshwari.us/images/me.jpg"
                      />
                      <h5 className="title">{this.state.user.name}</h5>
                    </div>
                  </div>
                  
                  <hr />
                  <div className="button-container">
                    <Row>
                      
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          {this.state.user.killcount} <br />
                          <small>Assassinated</small>
                        </h5>
                      </Col>

                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          {this.state.user.rank} / {this.state.user.totalRanks}<br />
                          <small>Overall Rank</small>
                        </h5>
                      </Col>
                      
                    </Row>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Time left in the round:</CardTitle>
                </CardHeader>
                <CardBody>
                  <div id="clock" className="d-flex justify-content-center">
                    <div className="days">{this.state.countdown.days}</div>
                    <div>:</div>
                    <div className="hours">{this.state.countdown.hours}</div>
                    <div>:</div>
                    <div className="minutes">{this.state.countdown.minutes}</div>
                    <div>:</div>
                    <div className="seconds">{this.state.countdown.seconds}</div>
                  </div>

                  {nextRoundText}
                </CardBody>
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
                          {this.state.user.target} <br />
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
                          {this.state.user.assassin} <br />
                          <span className="text-danger">
                            <small>Assassin</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          
                        </Col>
                      </Row>

                      <div className="button-box d-flex justify-content-center">
                        <Button color="info">I'M OUT</Button>
                        <Button color="danger">REPORT</Button>
                      </div>
                      
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>

            <Col></Col>
            
          </Row>
        </div>
      </>
    );
  }
}
export default User;
