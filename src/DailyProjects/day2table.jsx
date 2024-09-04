import axios from "axios";
import "../css/DisplayTable.modules.css";
import { Component } from "react";

class DisplayTable extends Component {
  state = {
    recipes: [],
    loading: false,
    error: false,
    ContentVisibility: false,
    currentData:[],
    items:2

  };

  

  componentDidMount = () => {
    console.log("I'm executed");
    this.FetchData();
  };

  FetchData = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/recipes");
      // console.log(data.data.recipes);
      this.setState({
        recipes: data.data.recipes,
        loading: false,
        currentData:data.data.recipes.slice(0,this.state.items)
        
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({
        error: true,
        loading: false,
      });
    }
  };

  TableDataHandler = () => {
    this.setState({
      ContentVisibility: true,
    });
  };

  AddHandler = () => {
    this.setState((prev) => {
      const newItems = prev.items + 1;
      return {
        items: newItems,
        currentData: prev.recipes.slice(0, newItems)
      };
    });
  }
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <img
           src="https://webdesigndev.com/wp-content/uploads/2021/10/1.image_.jpg"
            // src="https://www.logodesign.net/logo-new/circles-with-text-modern-design-9390ld.png?nwm=1&nws=1&industry=employee&txt_keyword=All"
            className="logo"
          />

          <div className="home">
            <h4 onClick={this.TableDataHandler}>HOME</h4>
            <h4>ABOUT</h4>
            <h4>CONTACT</h4>
          </div>
        </div>
        {/* ///////////////////////logo and sidebar/////////////////// */}
        <div>
          <nav className="header">
            <h3>RESTAURANT VIBES</h3>
          </nav>
          <div className="right-div">
            <button className="add" onClick={this.AddHandler}>ADD+</button>
            {this.state.ContentVisibility ? (
              <table className="table" style={{height:"300px"}}>
                <thead>
                  <tr className="headings">
                    <th>ID</th>
                    <th>NAME</th>
                    <th>IMAGE</th>
                    <th>INGREDIENTS</th>
                    <th>INSTRUCTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.currentData.map((each) => {
                    return (
                      <tr key={each.id}>
                        <td>{each.id}</td>
                        <td>{each.name}</td>
                        <td>
                          <img
                            src={each.image}
                            alt="each"
                            width={100}
                            height={100}
                          />
                        </td>
                        <td>{each.ingredients}</td>
                        <td>{each.instructions}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayTable;
