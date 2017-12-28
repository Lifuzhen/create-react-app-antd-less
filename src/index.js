import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickCounter id="007"/>, document.getElementById('root'));
registerServiceWorker();


