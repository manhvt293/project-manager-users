import React, { Component } from 'react';

class Template extends Component {
  
    render() {  
        return (
            <tr>
                <th scope="row">1</th>
                <td>{this.props.username}</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>
                <button type="button" className="btn btn-primary">Primary</button>
                </td>
            </tr>
        );
    }
}

export default Template;