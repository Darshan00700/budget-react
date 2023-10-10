
import { Container, Header, Icon, Grid, Form, Segment, Statistic, StatisticLabel, Button } from 'semantic-ui-react';
import './App.css';
import "semantic-ui-css/semantic.min.css";
import MainHeader from './component/MainHeader'
import ButtonSaveOrCancel from './component/ButtonSaveOrCancel';
import NewEntryForm from './component/NewEntryForm';
import DisplayBalance from './component/DisplayBalance';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance size="small" title="YourBalance" value="2,550" />
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income" value="2000.00" color='green' />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance size="tiny" color='red' title="Expenses" value="600" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="History" type="h3" />
      <Segment color="red">
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left' >
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign='right' >
              $10
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left' >
              Something else
            </Grid.Column>
            <Grid.Column width={3} textAlign='right' >
              $100
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left' >
              Something new
            </Grid.Column>
            <Grid.Column width={3} textAlign='right' >
              $20
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add new transcation" type="h3" />
      <NewEntryForm />

    </Container>
  );
}

export default App;
