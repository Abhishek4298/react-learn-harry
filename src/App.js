import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import NewsArticle from './components/NewsArticle';
import ContactUs from './components/ContactUs';
import NavbarLink from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import LoadingBar from 'react-top-loading-bar'
import PhoneBookForm from './components/Form/PhoneBookForm';
import NoteState from './context/NoteState';
import WeatherTest from './components/WeatherApp/WeatherTest.jsx';


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
      {/* <WeatherTest /> */}
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
          <NoteState>
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
                      path="/form"
                      element={
                        <>
                          <PhoneBookForm
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
          </NoteState>
        </div>
      </div>
    </>
  );
}

export default App;
