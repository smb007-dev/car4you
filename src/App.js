import './App.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import blurryCar from './assets/blurryCar.jpg';

function App() {
  const [vehicle, setVehicle] = useState('');
  const [extras, setExtras] = useState([]);
  const [openExtras, setOpenExtras] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [budget, setBudget] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ vehicle, extras, startDate, endDate, budget, comment });
  };

  const toggleExtras = () => {
    setOpenExtras(!openExtras);
  };

  const handleExtrasChange = (e) => {
    const value = e.target.value;
    if (extras.includes(value)) {
      setExtras(extras.filter(item => item !== value));
    } else {
      setExtras([...extras, value]);
    }
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="app-title">Car4You</h1>
        <p className="app-para">Rent your dream car easily!</p>
      </div>

      <img src={blurryCar} alt="Blurry Car" className="bottom-left-car" />

      <div className="form-card">
        <h2>Book your car</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Vorname..." />
          </div>
          <div className="row">
            <input type="email" placeholder="Email..." />
            <input type="tel" placeholder="Telefon..." />
          </div>

          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            placeholderText="Rental period"
            className="input input-with-icon"
            dateFormat="dd/MM/yyyy"
          />

          <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="input">
            <option value="">Vehicle selection</option>
            <option value="City">City</option>
            <option value="Family">Family</option>
            <option value="Race">Race</option>
            <option value="Luxury">Luxury</option>
          </select>

          <div className="dropdown-multi">
            <div className="dropdown-header" onClick={toggleExtras}>
              {extras.length > 0 ? `Extras: ${extras.join(', ')}` : 'Select Extras'}
            </div>
            {openExtras && (
              <div className="dropdown-menu">
                {['GPS', 'Child Seat', 'Insurance'].map(extra => (
                  <label key={extra} className="dropdown-item">
                    <input
                      type="checkbox"
                      value={extra}
                      checked={extras.includes(extra)}
                      onChange={handleExtrasChange}
                    />
                    {extra}
                  </label>
                ))}
              </div>
            )}
          </div>

          <select value={budget} onChange={(e) => setBudget(e.target.value)} className="input">
            <option value="">Budget</option>
            <option value="100-200">100 - 200</option>
            <option value="200-300">200 - 300</option>
            <option value="300-400">300 - 400</option>
          </select>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment..."
            className="input"
            rows={3}
          />

          <button type="submit" className="submit-btn">Book now</button>
        </form>
      </div>
    </div>
  );
}

export default App;
