import './App.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [vehicle, setVehicle] = useState('');
  const [extras, setExtras] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [budget, setBudget] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ vehicle, extras, startDate, endDate, budget, comment });
  };

  const formatDate = (date) => date ? date.toLocaleDateString() : "";

  return (
    <div className="App">
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
            className="input"
            dateFormat="dd/MM/yyyy"
            customInput={
              <input
                type="text"
                className="input"
                value={
                  startDate && endDate
                    ? `Rental period: from ${formatDate(startDate)} to ${formatDate(endDate)}`
                    : startDate
                    ? `Rental period: from ${formatDate(startDate)} to …`
                    : ""
                }
                readOnly
              />
            }
          />

          <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="input">
            <option value="">Vehicle selection</option>
            <option value="City">City</option>
            <option value="Family">Family</option>
            <option value="Race">Race</option>
            <option value="Luxury">Luxury</option>
          </select>

          <select value={extras} onChange={(e) => setExtras(e.target.value)} className="input">
            <option value="">Extras</option>
            <option value="GPS">GPS</option>
            <option value="Child Seat">Child Seat</option>
            <option value="Insurance">Insurance</option>
          </select>

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
