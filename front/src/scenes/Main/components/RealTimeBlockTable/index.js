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


class RealTimeBlockTable extends Component {
    constructor() {
        super();
        this.socket = {
            client: null,
            handler: this.updateTableData
        }
        this.state = {
            blocks: []
        }
    }

    async componentDidMount() {
        this.setState({blocks: await blocksSelectors.getMain()});
        await blocksSelectors.subscribe(this.socket);
    }

    componentWillUnmount() {
        blocksSelectors.unsubscribe(this.socket);
    }

    updateTableData = (blocks) => {
        this.setState({blocks: blocks});
    }

    render() {
        return (
            <div>
              <ReactTable
                data={this.state.blocks}
                columns={columns}
                showPagination={false}
                className="-striped -highlight"
              />
            </div>
      );
    }
}

export default RealTimeBlockTable
