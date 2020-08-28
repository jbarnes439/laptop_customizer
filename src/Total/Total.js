import React, { Component } from 'react';

class Total extends Component {

  
  render() {

    const total = Object.keys(this.props.optionsSelected).reduce(
      (acc, curr) => acc + this.props.optionsSelected[curr].cost,
      0
    );
    
    console.log('formatCurrency in Total is', this.props.formatCurrency)
    return(
      <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
                {this.props.formatCurrency(total)}
        </div>
      </div>
    )

  }
}

export default Total;

