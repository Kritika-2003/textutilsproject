
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/textform';
//import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';




//  import { BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom/cjs/react-router-dom.min';
//import{ BrowserRouter as Router,Route, Switch} from 'react-router-dom';




function App() {
    const [mode, setmode] = useState('light');

    const toggleMode =  (cls)=>{
      removeBodyClasses();
      document.body.classList.add('bg-'+cls)
        if(mode=== 'light')
          {setmode('dark');
          document.body.style.backgroundColor='#042743';
          ShowAlert("light mode has been disabled","success");
          document.title='Textutils-Dark Mode';

          setInterval (() => {
            document.title='install textutils now';
        }, 3000);

        setInterval (() => {
          document.title='Textutils is amazing';
      }, 3000);
        
          
        }
          else{
            setmode ('light');
            document.body.style.backgroundColor='white';
            ShowAlert("light mode has been enabled","success");
            document.title='Textutils-Light Mode';
          }
        }
        const [alert, setAlert] = useState(null);
        const ShowAlert = (message,type)=>{
              setAlert({
                 msg:message,
                 type:type
                 })

               setTimeout(() => {
                  setAlert(null);
              }, 4000);
                
                    }

             const removeBodyClasses=()=>{
              document.body.classList.remove('bg-light')
              document.body.classList.remove('bg-dark')
              document.body.classList.remove('bg-success')
              document.body.classList.remove('bg-danger')
              document.body.classList.remove('bg-warning')
             }       

        
   return (
    
    <>
       {/* <Router> */}
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3" >
      
        {/* <Switch>

        <Route exact path="/about" >
          <About  mode ={mode}/>
          </Route> */}

          {/* <Route exact path="/" > */}
          <TextForm heading = "Enter your text to analyse" mode ={mode} ShowAlert = {ShowAlert}/>
            {/* </Route> */}
            
          
        {/* </Switch> */}
      </div>
      
 
{/* /* <Navbar title="textutils"  aboutText="About Us"/> */}

{/* </Router> */}
</>


 

);
        }
      

export default App;

