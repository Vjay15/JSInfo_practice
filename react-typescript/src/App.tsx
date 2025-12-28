import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { MutableRef } from './components/ref/MutableRef';
import { CounterClass } from './components/class/CounterClass';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';

function App() {
  const personName = {
    first:'Bruce',
    last:'Wayne',
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <CustomButton variant='primary' onClick={() => console.log('Hello')}>
        Primary Button
      </CustomButton>
      <CustomInput />
      {/* <Toast position='left-top' /> */}
      {/* <RandomNumber value={10} isPositive />  */}
      {/* <List items={['Apple','Banana']}
      onClick={(item) => console.log(item)} /> */}
      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* <CounterClass message="Hello!"/> */}
      {/* <MutableRef /> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
     {/* <Counter /> */}
     {/* <User /> */}
     {/* <LoggedIn /> */}
     {/* <Container styles={{border:'1px solid black',padding:'1rem'}}/> */}
     {/* <Input value='' handleChange={(event) => console.log(event)} /> */}
     {/* <Button handleClick={(event,id) => {
      console.log('Button Clicked',event,id)
     }} /> */}
     {/* <Heading>Placeholder text</Heading>
     <Oscar>
        <Heading>
          Ocar goes to Leonardo Dicaprio
        </Heading>
     </Oscar> */}
     {/* <Status status='loading'/> */}
     {/* <Greet name="Vjay" messageCount={20} isLoggedIn={true}/>
     <Person name={personName}/> 
     <PersonList names={nameList} /> */}
    </div>
  );
}

export default App;
