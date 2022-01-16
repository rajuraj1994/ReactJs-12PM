import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import IncrementDecrement from './hooks/IncrementDecrement'
import HomePage from './pages/HomePage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Test from './hooks/Test'
import DataFetch from './hooks/DataFetch'
import Main from './hooks/Main'
import Show from './context/Show'
import FormValidation from './validation/FormValidation'
import MainPage from './redux/MainPage'


const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signin" element={<Signin/>}/>

                {/* hooks */}
                <Route path="/increment" element={<IncrementDecrement/>} />
                <Route path="/test" element={<Test/>} />
                <Route path="/data" element={<DataFetch/>} />
                <Route path="/main" element={<Main/>} />

                {/* context */}
                <Route path="/context" element={<Show/>} />

                <Route path="/validation" element={<FormValidation/>} />

                <Route path="/reduxdemo" element={<MainPage/>} />
                

            </Routes>
            
        </Router>
    )
}

export default MyRoute
