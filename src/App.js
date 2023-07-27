import './App.css';
import Head from './Head';
import Home from './component/Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <header>
        <Head />
    </header>
    <main>
    <div className='Home'>
      <Home />
    </div> 
    </main>
    <hr className='hrz' />
    <footer>
    <Footer />
    </footer>
    </div>
  );
}



export default App;
