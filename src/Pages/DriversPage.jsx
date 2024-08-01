import { useEffect, useState } from 'react';
import axios from 'axios';
import './DriversPage.css';

const DriversPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('http://10.1.16.211/api/v1/drivers/');
        setDrivers(response.data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDrivers();
  }, []);

  if (error) {
    return <div className="error-message">Error fetching driver data: {error}</div>;
  }

  return (
    <div className="main-container">
      <h1 className="main-title">Водители</h1>
      <table className="drivers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Surname</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Passport</th>
            <th>Drivers License</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.surname}</td>
              <td>{driver.name}</td>
              <td>{driver.last_name}</td>
              <td>{driver.passport ? driver.passport : 'N/A'}</td>
              <td>{driver.drivers_license ? driver.drivers_license : 'N/A'}</td>
              <td>{driver.phone ? driver.phone : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriversPage;
