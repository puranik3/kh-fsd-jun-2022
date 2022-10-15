import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import ThemeContext from '../contexts/ThemeContext';
import Menu from './Menu';
import Home from './pages/Home';
import WorkshopsList from "./pages/WorkshopsList";
import WorkshopDetails from './pages/WorkshopDetails';
import AddWorkshop from './pages/AddWorkshop';

const App = () => {
    const [ theme, setTheme ] = useState( 'light' );

    const toggleTheme = () => {
        if( theme === 'light' ) {
            setTheme( 'dark' );
        } else {
            setTheme( 'light' );
        }
    };

    const value = {
        // theme: theme
        // setTheme: setTheme
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
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
        </ThemeContext.Provider>
    )
};

export default App;