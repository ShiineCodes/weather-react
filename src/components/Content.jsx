export function Content() {
  return (<main>
      <div className="weather-app-data">
          <div>
              <h1 className="weather-app-city" id="city"> Stockholm</h1>
              <p className="weather-app-details">
                  <span id="time"></span> 13:00<br />
                  <span id="description"></span>
                  <br />
                  Humidity: <strong id="humidity"></strong>, Wind: <strong id="wind-speed"></strong>
              </p>
          </div>
          <div className="weather-app-temperature-container">
              <div id="icon"></div>
              <div className="weather-app-temperature" id="temperature">12</div>
              <div className="weatehr-app-unit">°C</div>
          </div>
      </div>
  </main>)
}