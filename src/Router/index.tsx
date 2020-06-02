
// import HomePage from "../page/HomePage/HomePage"
// import PageA from "../page/PageA"
// import PageB from "../page/PageB"
// export default {
//     routes: [
//         {
//             path: '/Layout',
//             exact: true,
//             component: Layout,
//             children: [
//                 {
//                     path: '/HomePage',
//                     exact: true,
//                     component: HomePage
//                 },
//                 {
//                     path: '/PageA',
//                     exact: true,
//                     component: PageA
//                 },
//                 {
//                     path: '/PageB',
//                     exact: true,
//                     component: PageB
//                 },
//             ]

//         }

//     ]
// }
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout"
import Login from "../Login/Login"
function router() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Layout} />
            </Switch>
        </Router>
    );
}

export default router;


