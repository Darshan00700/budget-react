
import { Container, Icon, Grid, Segment } from 'semantic-ui-react';
import './App.css';
import "semantic-ui-css/semantic.min.css";
import MainHeader from './component/MainHeader'
import NewEntryForm from './component/NewEntryForm';
import DisplayBalance from './component/DisplayBalance';
import DisplayBalances from './component/DisplayBalances';
import Entryline from './component/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance size="small" title="YourBalance" value="2,550" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <Entryline description="income" value="$10" />
      <Entryline description="expense" value="$10" isExpense/>
      <MainHeader title="Add new transcation" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
