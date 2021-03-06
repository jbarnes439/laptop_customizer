import React, { Component } from 'react';
import Parts from '../Parts/Parts';


class Customize extends Component {

  render() {    

    // const features = Object.keys(FEATURES).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const options = FEATURES[feature].map(item => {
    //     const itemHash = slugify(JSON.stringify(item));
    //     return (
    //       <div key={itemHash} className="feature__item">
    //         <input
    //           type="radio"
    //           id={itemHash}
    //           className="feature__option"
    //           name={slugify(feature)}
    //           checked={item.name === this.props.selected[feature].name}
    //           onChange={e => this.props.update(feature, item)}
    //         />
    //         <label htmlFor={itemHash} className="feature__label">
    //           {item.name} ({this.props.formatCurrency(item.cost)})
    //       </label>
    //       </div>
    //     );
    //   });
    //   return (
    //     <fieldset className="feature" key={featureHash}>
    //       <legend className="feature__name">
    //         <h3>{feature}</h3>
    //       </legend>
    //       {options}
    //     </fieldset>
    //   );

    // })
    

    return (
      // {features}
      <Parts
      update={this.props.update}
      selected={this.props.selected} 
      formatCurrency={this.props.formatCurrency}/>
    )
  }
}

export default Customize