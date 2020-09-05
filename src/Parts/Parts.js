import React, { Component } from 'react';
import FEATURES from '../index';
import slugify from 'slugify';
import Part from '../Part/Part';

export default function Parts(props) {

  
    return Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === props.selected[feature].name}
              onChange={e => props.update(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({props.formatCurrency(item.cost)})
          </label>
          </div>
        );
      });
      return (
        <Part 
        key={featureHash}
        featureHash={featureHash}
        feature={feature}
        options={options}/>
        // <fieldset className="feature" key={featureHash}>
        //   <legend className="feature__name">
        //     <h3>{feature}</h3>
        //   </legend>
        //   {options}
        // </fieldset>
      );

    })
  }


