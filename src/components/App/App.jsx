// import Container from '@mui/material/Container';
import ResponsiveAppBar from 'components/Appbar/AppBar';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';

import './App.css';

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      {/* <Container maxWidth="xl" fixed> */}
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      {/* </Container> */}
    </>
  );
}
