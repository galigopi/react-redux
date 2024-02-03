import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import Counter from './components/counter';

function App() {

  return (

    <Provider store={store}>
      <div className='App'>
        <Counter />
      </div>
    </Provider>

  );
}

export default App;
