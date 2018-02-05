import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

import * as blocksSelectors from 'data/blocks/selectors';

const columns = [
  {
    property: 'id',
    header: {
      label: 'Height',
    }
  },
  {
    property: 'timestamp',
    header: {
      label: 'Time',
    }
  },
  {
    property: 'witness',
    header: {
      label: 'Witness',
    }
  },
  {
    property: 'transactions',
    header: {
      label: 'Transactions',
    }
  },
  {
    property: 'operations',
    header: {
      label: 'Operations',
    }
  },
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
                columns={[
                  {
                    columns: [
                      {
                        Header: "Height",
                        accessor: "id"
                      },
                      {
                        Header: "Time",
                        accessor: "timestamp"
                      },
                      {
                        Header: "Witness",
                        accessor: "witness"
                      },
                      {
                        Header: "Transactions",
                        accessor: "transactions"
                      },
                    ]
                  }
                ]}
                defaultPageSize={20}
                className="-striped -highlight"
              />
            </div>
      );
    }
}

export default BlockTable
