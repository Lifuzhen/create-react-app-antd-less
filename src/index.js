import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickCounter />, document.getElementById('root'));
registerServiceWorker();
