import ReactDOM from 'react-dom';
import router from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
