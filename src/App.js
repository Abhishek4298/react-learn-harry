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
import LoadingBar from 'react-top-loading-bar'

function App() {
  let [theme, setTheme] = useState("light")
  let [alert, setAlert] = useState(null)
  let [progress, setProgress] = useState(0)

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
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
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
                          setProgress={setProgress} />
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
