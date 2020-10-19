import React from 'react'
// const { Route, Switch, HashRouter } = require('react-router-dom')
import { Route, Switch, HashRouter } from 'react-router-dom'

import Home from '../page/Home'
import Login from '../page/Login'
import Register from '../page/Register'
// const Home = require('../page/Home')
// const Login = require('../page/Login')
// const Register = require('../page/Register')


const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </HashRouter>
    )
}

// function Router() {
//     return (
//         <div className="App">啦啦啦儿123
//             <HashRouter>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route exact path="/login" component={Login} />
//                     <Route exact path="/register" component={Register} />
//                 </Switch>
//             </HashRouter> 
//         </div>
//     );
//   }
  


export default Router