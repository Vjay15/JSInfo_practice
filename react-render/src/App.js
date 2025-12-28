import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
import Parent from './components/ParentChild/Parent';
import { ParentOne } from './components/Optimization/Parent1';
import { Child1 } from './components/Optimization/Child1';
import { ParentTwo } from './components/Optimization/ParentTwo';
import { ParentThree } from './components/IncorrectOptimization/ParentThree';
import { ParentFour } from './components/IncorrectOptimization/ParentFour';
import { ContextParent } from './components/Context/ContextParent';
import { ChildA } from './components/Context/ContextChildren';

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
      {/* <ParentFour /> */}
      {/* <ParentThree /> */}
      {/* <ParentTwo /> */}
      {/* <ParentOne>
        <Child1></Child1>
      </ParentOne> */}
      {/* <Parent /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState />  */}
    </div>
  );
}

export default App;
