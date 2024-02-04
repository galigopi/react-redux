import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import Counter from './components/counter';

function App() {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className='App'>
          <Counter />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
