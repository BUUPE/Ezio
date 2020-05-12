import Link from 'next/link';
import React from "react";

import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";


var playerData = [ // this will come from the DB
  {
    rank: 1,
    name: "Warren",
    numKilled: 2
  },
  {
    rank: 2,
    name: "John",
    numKilled: 2
  },
  {
    rank: 3,
    name: "Keshav",
    numKilled: 2
  },
  {
    rank: 99,
    name: "testuser",
    numKilled: 0
  },
  {
    rank: 99,
    name: "testuser",
    numKilled: 0
  },
  {
    rank: 99,
    name: "testuser",
    numKilled: 0
  },
  {
    rank: 99,
    name: "testuser",
    numKilled: 0
  },
  {
    rank: 99,
    name: "testuser",
    numKilled: 0
  },
  {
    rank: 99,
    name: "testuser",
    numKilled: 0
  },
];

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formIsHidden: true
    }
  }

  handleReportButtonClicked() {
    console.log("hello I was clicked");
    this.setState({
      formIsHidden: false,
      smShow: true
    });
  }
  
  // MyVerticallyCenteredModal() {
  //   const [smShow, setSmShow] = useState(false);
  //   return (
  //     <>
  //     <Modal
  //       size="sm"
  //       show={smShow}
  //       onHide={() => setSmShow(false)}
  //       aria-labelledby="example-modal-sizes-title-sm"
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="example-modal-sizes-title-sm">
  //           Small Modal
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>...</Modal.Body>
  //     </Modal>
  //     </>
  //   )
  // }
    render() {
      return (
        <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4"><b>God Mode</b></CardTitle>
                </CardHeader>
                <CardBody>
                      <>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="nc-icon nc-single-02"></i></InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" id="myInput" placeholder="Seach Player Status" />
                        </InputGroup>
                      </>
                  <table class="table-responsive-sm" class="table"
                        data-url="playerData"
                        data-search="true"
                        data-show-toggle="true"
                        data-row-style="rowStyle">
                    <thead className="text-primary">
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Killed</th>
                      <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>

                    {playerData.map( player => {
                      return (
                        <tr id={player.rank}>
                          <td>{player.rank}</td>
                          <td>{player.name}</td>
                          <td>{player.numKilled}</td>
                          <td>
                          <Button
                              onClick={() => this.handleReportButtonClicked()}
                              className="btn-round btn-icon"
                              color="success"
                              outline size="sm"
                            >
                            </Button>
                          </td>
                        </tr>
                      );
                    })}

                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Link href="/">
            <Button color="success"><a>Back to MainPage</a></Button>
          </Link>
        </div>

        <Modal isOpen={true}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Do Something</Button>{' '}
          <Button color="secondary" >Cancel</Button>
        </ModalFooter>
      </Modal>


        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form class="form-popup" id="myForm" hidden={this.state.formIsHidden}>
                <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="alive" checked></input>
                      <label class="form-check-label" for="gridRadios1">
                        Alive
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="killed"></input>
                      <label class="form-check-label" for="gridRadios2">
                        Killed
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="reported" disabled></input>
                      <label class="form-check-label" for="gridRadios3">
                        Reported
                      </label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
        </div>
      </div>
      </>
      );
    }
}

export default Admin;
