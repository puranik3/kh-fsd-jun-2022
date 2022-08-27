import { Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import Home from './pages/Home';
import WorkshopsList from "./pages/WorkshopsList";
import WorkshopDetails from './pages/WorkshopDetails';
import AddWorkshop from './pages/AddWorkshop';

const App = () => {
    return (
        <>
            <Menu />
            <div className="container">
                <Route path="/" exact>
                    <Home />
                </Route>
                <Switch>
                    <Route path="/workshops/add">
                        <AddWorkshop />
                    </Route>
                    <Route path="/workshops/:id">
                        <WorkshopDetails />
                    </Route>
                    <Route path="/workshops">
                        <WorkshopsList sm={6} lg={3} />
                    </Route>
                </Switch>
            </div>
        </>
    )
};

export default App;