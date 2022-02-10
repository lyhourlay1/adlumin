import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Splash from './splash'

export default ()=> (
    <div>
        <Routes>
            <Route path="/" element={<Splash/>} />
        </Routes>
    </div>
)