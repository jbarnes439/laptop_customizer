import React, { Component } from 'react';
import Total from '../Total/Total';
import Summary from '../Summary/Summary'


class Cart extends Component {

  render() {
    //The commented out code was moved to the Summary component !! -> check it out!
    // we were able to remove the 'const summary' and returned Object.keys... ect...

    // const summary = Object.keys(this.props.selected).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const selectedOption = this.props.selected[feature];

    //   return (
    //     <div className="summary__option" key={featureHash}>
    //       <div className="summary__option__label">{feature} </div>
    //       <div className="summary__option__value">{selectedOption.name}</div>
    //       <div className="summary__option__cost">
    //         {this.props.formatCurrency(selectedOption.cost)}
    //       </div>
    //     </div>
    //   );
    // });

    return (

      <section className="main__summary">
        <h2>Your cart</h2>
        {/* {summary} */}
        <Summary 
          selected={this.props.selected}
          formatCurrency={this.props.formatCurrency}/>
        <Total
          optionsSelected={this.props.selected}
          formatCurrency={this.props.formatCurrency} />
      </section>
    )

  }
}

export default Cart;