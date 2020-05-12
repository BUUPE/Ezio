import Link from 'next/link';

import React from "react";
import {
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


export default function admin() {
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
                            onclick="myForm"
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
    

    <form class="form-popup" id="myForm" hidden>
    <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
          <label class="form-check-label" for="gridRadios1">
            Alive
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
          <label class="form-check-label" for="gridRadios2">
            Killed
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled></input>
          <label class="form-check-label" for="gridRadios3">
            Reported
          </label>
        </div>
    </form>
    </>
    );
    function reportForm() {
        alert("Great Shot!");
        document.getElementById("myForm").style.display = "block";
    }
}
