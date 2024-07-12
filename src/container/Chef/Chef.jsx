import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" className='app__image__chef'/>
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Our Chef's" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"></p>
        </div>
        <p className="p__opensans"> Chef Dracula himself is known to make appearances in the dining room, sharing stories of his centuries-old culinary journey. His charming yet enigmatic presence adds an unforgettable touch to the dining experience. Legend has it that his secret ingredient is the passion he pours into every dish, making each meal a bite of eternal delight. </p>
      </div>

      <div className="app__chef-sign">
        <p>Count Dracula</p>
        <p className="p__opensans">Chef & Founder</p>
        <h1 className="gradient__text">Count Dracula</h1>
      </div>
    </div>
  </div>
);

export default Chef;
