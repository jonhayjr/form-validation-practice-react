import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*Import Components*/
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Form/>
    </div>
 
  );
}

export default App;
