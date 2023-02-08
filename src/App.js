import { ThemeProvider } from '@emotion/react';
import Home from './Components/Home';
import theme from './Components/styles';

// import App from './Components/ImageSlider/App';
// import Myapp from './Components/ImageSlider/Myapp';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Home/>
    {/* <Myapp/> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
