import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Dropdown, FormControl, Image, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { simpleAction } from "../../store/actions/simpleAction";
import "./style.css";
import ButtonComponent from "../../components/button";
import CardView from "../../components/card";
import TextInput from "../../components/textInput";
import { getCandidate } from "../../services/candidate";
class App extends Component {
  constructor() {
    super();
    this.state = {
      candidate: [],
      temp: []
    }
  }
  async componentDidMount() {
    await getCandidate().then(async (res) => {
      // await new Promise(resolve => setTimeout(resolve, 5000));

      this.setState({
        candidate: res.candidate,
        temp: res.candidate
      })
    })
  }
  render() {
    const onChangeSearch = (value) => {
      if (value.length === 0) {
       return this.setState({
          candidate: this.state.temp
        })
      }
      let filterData = filterByValue(this.state.candidate, value)
      this.setState({
        candidate: filterData
      })
    }
    function filterByValue(array, string) {
      return array.filter(o =>
        Object.keys(o).some(k => typeof o[k] === 'string' && o[k].toLowerCase().includes(string.toLowerCase())));
    }
    return (
      <div>
        <div className="container mt-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mt-2">
                <b>Market Place</b>
              </div>
              <div className="col-12 col-lg-1 offset-4">
                <ButtonComponent className="button remove-border" variant="outline-dark">Login</ButtonComponent>
              </div>
            </div>
            <div className=" m-4 ml-0">
              <div className="row">
                <div className="col-6">
                  <TextInput onChange={onChangeSearch} />
                </div>
                <div className="col-3 offset-3">
                  <ButtonComponent className="button" variant="outline-primary">Demographic Map</ButtonComponent>
                </div>
              </div>
            </div>
            <div className="m-4">
              <div className="row ml-1">
                <div className="col-8">
                  <div className="row">

                    <Dropdown>
                      <Dropdown.Toggle className="remove-border" variant="outline-secondary" id="dropdown-basic">
                        Experience
                  </Dropdown.Toggle>

                      {/* <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu> */}
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle className="remove-border" variant="outline-secondary" id="dropdown-basic">
                        Industry
                  </Dropdown.Toggle>

                      {/* <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu> */}
                    </Dropdown>
                    <Dropdown >
                      <Dropdown.Toggle className="remove-border" variant="outline-secondary" id="dropdown-basic">
                        Gender
                  </Dropdown.Toggle>

                      {/* <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu> */}
                    </Dropdown>
                    <Dropdown >
                      <Dropdown.Toggle className="remove-border" variant="outline-secondary" id="dropdown-basic">
                        Education
                  </Dropdown.Toggle>

                      {/* <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu> */}
                    </Dropdown>
                    <Dropdown >
                      <Dropdown.Toggle className="remove-border" variant="outline-secondary" id="dropdown-basic">
                        Language
                  </Dropdown.Toggle>

                      {/* <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu> */}
                    </Dropdown>
                  </div>
                </div>
                <div className="col">
                  <div className="row mt-2">
                    <InputGroup.Checkbox className="remove-background" /> Agent having laptop/desktop
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container pl-5 pt-2 mt-0">

            {this.state.candidate.length !== 0 ?(
              <div className="row">
                {
                  this.state.candidate.map((data) => {
                    return (<div className="col-4 col-lg-4 pt-2"> <CardView key={data._id} data={data} /> </div>)
                  })
                }
              </div>):(<div className="row"> <div className="col-12"> <h3>No Candidate found</h3> </div></div>)
            }
          </div>
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
