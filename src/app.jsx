import dom from 'react-dom';
import React from 'react';

import makeHeadLine from './headlineMaker';

dom.render(
  <p>{ makeHeadLine('hello world') }</p>,
  document.getElementById('root')
);