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


export default function Leaderboard() {
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
                <CardTitle tag="h4"><b>LeaderBoard</b></CardTitle>
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
                    <th className="text-right">Money</th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr>
                    <td>
                      {playerData.map( player => {
                        return (<div>{player.rank}</div>);
                        })}
                    </td>
                    <td>
                      {playerData.map( player => {
                      return (<div>{player.name}</div>);
                      })}
                    </td>
                    <td>
                      {playerData.map( player => {
                      return (<div>{player.numKilled}</div>);
                      })}
                    </td>
                    <td className="text-right"></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                    <td className="text-right"></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Netherlands</td>
                    <td>Baileux</td>
                    <td className="text-right"></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                    <td className="text-right"></td>
                  </tr>
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
      </>
    );

    function rowStyle(row, index) {
      var classes = [
        'bg-blue',
        'bg-green',
        'bg-orange',
        'bg-yellow',
        'bg-red'
      ]
    if (index % 1 === 0 && index / 2 < classes.length) {
      return {
        classes: classes[index / 2]
      }
    }
    return {
      css: {
        color: 'blue'
      }
    }
  }
  //try to use script to do the search bar
  <script>

  </script>
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

}




// export default function Leaderboard() {
//   return (
//     <div>
//       <p className="red-text">TODO: Public leaderboard.</p>
//       <div className="row">
//         <div className="col-sm-1">Ezio</div>
//         <div className="col-sm-1">Auditore</div>
//         <div className="col-sm-1">da Firenze</div>
//         <div className="col-sm-1">da Firenze</div>
//         <div className="col-sm-1">da Firenze</div>
//         <div className="col-sm-1">da Firenze</div>
//         <div className="col-sm-1">da Firenze</div>
//         <div className="col-sm-1">da Firenze</div>
//         <div className="col-sm-1">da Firenze</div>
//         <div className="col-sm-1">da Firenze</div>
//         <div className="col-sm-1">da Firenze</div>
//         <div className="col-sm-1">da Firenze</div>
//       </div>
//
      <Link href="/">
        <Button color="success"><a>Success</a></Button>
      </Link>
//     </div>
//   );
// }
