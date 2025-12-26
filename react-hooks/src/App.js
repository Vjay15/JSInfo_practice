import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import EffectCounter from './components/EffectCounter';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterReducerOne from './components/CounterReducerOne';
import CounterReducerTwo from './components/CounterReducerTwo';
import CounterReducerThree from './components/CounterReducerThree';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentD from './components/ComponentD';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import CounterMemo from './components/CounterMemo';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTItleTwo';
import CounterCustomHookOne from './components/CounterCustomHookOne';
import CounterCustomHookTwo from './components/CounterCustomHookTwo';
import UserForm from './components/UserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()
const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
            break
        case 'decrement':
            return state - 1
            break
        case 'reset':
            return initialState
            break
        default:
            return state
    }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div className='App'>
      <UserForm />
      {/* <CounterCustomHookOne /> */}
      {/* <CounterCustomHookTwo /> */}
      {/* <DocTitleTwo /> */}
      {/* <DocTitleOne /> */}
      {/* <HookTimer /> */}
      {/* <FocusInput /> */}
      {/* <CounterMemo /> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
    </div>
  //   <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
  //   <div className="App">
  //     Count - {count}
  //     <ComponentA />
  //     <ComponentB />
  //     <ComponentC />
  //     {/* <CounterReducerThree /> */}
  //     {/* <CounterReducerTwo /> */}
  //     {/* <CounterReducerOne /> */}
  //     {/* <ChannelContext.Provider value={"Dodge"}>
  //       <UserContext.Provider value={"Vjay"}>
  //         <ComponentC />
  //       </UserContext.Provider>
  //     </ChannelContext.Provider> */}
  //     {/* <DataFetching /> */}
  //     {/* <IntervalHookCounter /> */}
  //     {/* <MouseContainer /> */}
  //     {/* <HookMouse /> */}
  //     {/* <HookCounterOne /> */}
  //     {/* <EffectCounter /> */}
  //     {/* <HookCounter4 /> */}
  //    {/* <HookCounter3 /> */}
  //    {/* <HookCounter />  */}
  //   </div>
  // </CountContext.Provider>
  );
}

export default App;
