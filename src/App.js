import Accordian from './components/Accordian'
import Search from './components/Search'

const items = [{
  "title":"What is React",
  "content":"React is a frontend javascript library"
},{
  "title":"Why to use React",
  "content":"React is favourite javascript framework among enginners"
},{
  "title":"How to use React",
  "content":"you use react by making components"
}]

function App() {
  return (
    <div className="App">
      {/* <Accordian items={items}/> */}
      <Search/>
    </div>
  );
}

export default App;
