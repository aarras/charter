import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Customer from './Pages/Customer'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/customer/:customerId" exact component={Customer} />
            </Switch>
        </Router>
    )
}