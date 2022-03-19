import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './weather.css';

const URL = `http://api.openweathermap.org/data/2.5/weather?`;
const appid = '9ba568b19d6dc56072388f66eb3f665d';

const WeatherTest = () => {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  const fetchCity = (cityName = search) => {
    // If search value is empty
    if (!cityName) {
      setError({ message: 'Please enter city name !' });
      return;
    }

    // fetch when no request is already in progress
    if (!loading) {
      setLoading(true);
      fetch(URL + `q=${cityName}&appid=${appid}`)
        .then(async (response) => {
          const data = await response.json();
          if (response.status === 200) {
            setError(false);
            setCity(data);
          } else {
            setError(data);
          }
        })
        .catch((err) => {
          setCity(null);
          setError(err);
          console.erro({ err });
        })
        .finally(() => setLoading(false));
    }
  };

  // fetch when search is changed
  useEffect(() => {
    fetchCity();
  }, [search]);

  return (
    <>
      {console.log('======> :: city', city)}
      <Card className='mx-auto mt-5'>
        <Card.Body>
          <Card.Title>
            <span className='fa fa-search form-control-feedback'></span>
            <input
              type='search'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className='form-control'
              placeholder='Search city'
            />
          </Card.Title>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className='text-danger'>{error.message || 'No Data found !!!'}</p>
          ) : (
            city && (
              <div>
                <Card.Text className='mb-2'>{city.sys.country} </Card.Text>
                <Card.Text>{city.main.temp} </Card.Text>
                <Card.Text>
                  Temprature Detail
                  <hr />
                  <h2>Min:{city.main.temp_min}</h2>
                  <h2>Max:{city.main.temp_max}</h2>
                </Card.Text>
              </div>
            )
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default WeatherTest;
