import logo from './logo.svg';
import './App.css';
import (Button, Progress) from 'semantic-ui-react'

function App() {
  return (
    <div>
    <p> 지우야 안녕해볼래 </p>
    <Button primary>hihi</Button>
    <Progress percent ={66} />
    </div>

  );
}

export default App;
