import { Route } from 'react-router-dom';

import Menu from './Menu';
import Home from './pages/Home';
import WorkshopsList from "./pages/WorkshopsList";

const App = () => {
    return (
        <>
            <Menu />
            <div className="container">
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/workshops">
                    <WorkshopsList sm={6} lg={3} />
                </Route>
            </div>
        </>
    )
};

export default App;