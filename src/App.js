import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ShoppingList from "./components/ShoppingList";
import ItemList from "./components/ItemList";
import { ShoppingProvider } from "./components/ShoppingContext";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import the initialized i18n instance

function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <ShoppingProvider>
          <ThemeProvider>
            <Route
              render={({ location }) => (
                <div className="App">
                  {location.pathname === "/" && <ThemeToggle />}
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                      exact
                      path="/shopping-list"
                      component={ShoppingList}
                    />
                    <Route path="/shopping-list/:listId" component={ItemList} />
                  </Switch>
                </div>
              )}
            />
          </ThemeProvider>
        </ShoppingProvider>
      </I18nextProvider>
    </Router>
  );
}

export default App;
