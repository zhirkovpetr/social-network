import React from 'react';

import loader from '../../assets/svg/loading.svg';

export const Preloader: React.FC = () => (
  <div>
    <img src={loader} alt={loader} />
  </div>
);
