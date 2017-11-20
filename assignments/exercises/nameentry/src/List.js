import React, {Component} from "react";

class List extends Component {
  render() {
    return (
      this.props.array.map((item, index) => {
        return <li>{item}</li>
      })
    );
  }
}

export default List;
