import React, { Component } from 'react';
import * as accountSelectors from 'data/account/selectors';

class AccountInfo extends Component {
    constructor() {
        super();        

        this.state = {
            account: ''
        }

    }

    async componentDidMount() {
        let account = await accountSelectors.getMain()
        this.setState({ account: account[1] });
    }

    render() {
        return (
            <div>
              <h1> Account </h1>
              
              { this.state.account && 
                <div>
                    <p>Account Name: { this.state.account.account.name } </p>
                    <p>Account Balance: { this.state.account.balances[0].balance / 10000 } PPY</p>
                </div>
              }
            </div>
      );
    }
}

export default AccountInfo
