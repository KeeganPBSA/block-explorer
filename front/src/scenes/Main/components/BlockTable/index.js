import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

import * as blocksSelectors from 'data/blocks/selectors';


const columns = [
  {
    accessor: 'id',
    Header: 'Height'
  },
  {
    accessor: 'timestamp',
    Header: 'Time'
  },
  {
    accessor: 'witness',
    Header: 'Witness'
  },
  {
    accessor: 'transactions',
    Header: 'Transactions'
  }
];


class BlockTable extends Component {
    constructor() {
        super();
        this.state = {
            blocks: []
        }
    }

    async componentDidMount() {
        this.setState({blocks: await blocksSelectors.getMain()});
    }

    render() {
        return (
            <div>
              <ReactTable
                data={this.state.blocks}
                columns={columns}
                defaultPageSize={20}
                className="-striped -highlight"
              />
            </div>
      );
    }
}

export default BlockTable
