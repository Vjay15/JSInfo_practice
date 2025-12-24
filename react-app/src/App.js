import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import ClickCounterTwo from './components/ClickCounterTwo';
import User from './components/User';
import Counters from './components/Counters';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Vjay"><ComponentC /></UserProvider>
      {/* <Counters render={(count,incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>}></Counters>
      <Counters render={(count,incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>}></Counters> */}
      {/* <HoverCounterTwo />
      <ClickCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Vjay' : 'Guest'}/> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter /> */}
      {/* <ErrorBoundary>
      <Hero heroName='Joker'></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <Form /> */}
      {/* <h1 className = 'error'>Error</h1>
      <h1 className = {styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message />
    <Greet></Greet>
    <Greet name='Bruce' heroName='Batman'>
      <p>This is children props</p>
    </Greet>
    <Welcome name='Bruce' heroName='Batman' /> */}
    </div>
  );
}

export default App;
