import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";



function App() {
  return (
    <>
    {/* <Navbar></Navbar>   for defualt*/} 
       {/* yha se prop pass kr rhe */}
      <Navbar title="text-convertor" />    
      <div className="container">
        <TextForm heading="Paste the Text here"/>
      </div>
      
    </>
  );
}

export default App;
