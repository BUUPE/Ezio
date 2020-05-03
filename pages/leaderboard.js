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

  const playerData = [ // this will come from the DB
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
                        <Input type="text" placeholder="Seach Player Status" />
                      </InputGroup>
                    </>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Killed</th>
                    <th className="text-right">Money</th>
                  </tr>
                  </thead>
                  <tbody>

                  {playerData.map( player => {
                    return (<div>{player.name}</div>);
                  })}


                  <tr>
                    <td>1</td>
                    <td>Niger</td>
                    <td>Oud-Turnhout</td>
                    <td className="text-right">$36,738</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                    <td className="text-right">$23,789</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Netherlands</td>
                    <td>Baileux</td>
                    <td className="text-right">$56,142</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                    <td className="text-right">$38,735</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Malawi</td>
                    <td>Feldkirchen in Kärnten</td>
                    <td className="text-right">$63,542</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Chile</td>
                    <td>Gloucester</td>
                    <td className="text-right">$78,615</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Portugal</td>
                    <td>Gloucester</td>
                    <td className="text-right">$98,615</td>
                  </tr>
                  </tbody>
                </Table>
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
