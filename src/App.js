import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import NewsArticle from './Component/NewsArticle';
import ContactUs from './Component/ContactUs';
import NavbarLink from './Component/Navbar';
import { useState } from 'react';
import Alert from './Component/Alert';

function App() {
  let [theme, setTheme] = useState("light")
  let [alert, setAlert] = useState(null)

  const showAlert = ((message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  })

  const toggleMode = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode enabled", "success")
    }
    else {
      setTheme("dark")
      document.body.style.backgroundColor = '#6c757d';
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <>
      <div>
        <NavbarLink mode={theme}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="row">
          <div className="col-md-12"></div>
          <Router>
            <>
              <Routes>
                <>
                  <Route
                    exact
                    path="/"
                    element={
                      <>
                        <Home
                          theme={theme}
                          showAlert={showAlert}
                        />
                      </>
                    }
                  />
                  <Route
                    exact
                    path="/contactUs"
                    element={
                      <>
                        <ContactUs
                          theme={theme}
                        />
                      </>
                    }
                  />
                  <Route
                    exact
                    path="/newsHeadlines"
                    element={
                      <>
                        <NewsArticle
                          theme={theme}
                          pageSize={6}
                          countryName="in"
                        />
                      </>
                    }
                  />
                </>
              </Routes>
            </>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
