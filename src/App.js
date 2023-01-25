import Header from './templates/Header';
import Main from './templates/Main';
import Footer from './templates/Footer';
import "./App.css";
import GlobalStyles from './components/GlobalStyles';

function App() {

  return (
    <div className="App">
        <GlobalStyles />

        <Header />

        <Main />

        <Footer />

    </div>
  );
}

export default App;
