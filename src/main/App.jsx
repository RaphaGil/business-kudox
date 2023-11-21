import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
import { HashRouter} from 'react-router-dom';
import Routes from '../components/template/Routes';


import Logo from '../components/template/Logo';
import Footer from '../components/template/Footer';
import Header from '../components/template/Header';



const App = (props)  => (
    <HashRouter>
        <div className="app">
         <Logo/>
         <Routes/>
         <Header/>
         <Footer/>
        </div>
    </HashRouter>   
)
export default App