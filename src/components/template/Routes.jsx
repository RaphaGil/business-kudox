import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Home from '../home/Home'
import Aluminium from './Aluminium'
import Buy from './Buy'



const Connec = (props) => (
<Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Aluminium" element={<Aluminium />} />
        <Route path="/Buy" element={<Buy/>}/>     
</Routes>
) 

export default Connec