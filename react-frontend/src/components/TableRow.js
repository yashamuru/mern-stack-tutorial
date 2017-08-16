import React, {Component, Link} from 'react';

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.obj._id}
        </td>
        <td>
          <Link to={"/edit"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
