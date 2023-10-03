import './App.css';
import styled from 'styled-components';

const Body = styled.div`
background-color: ${({ theme })}
`

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        Portfolio
      </header>
    </div>
  );
}

export default App;
