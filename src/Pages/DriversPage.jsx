import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Alert, Container, Box } from '@mui/material';

const DriversPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('http://10.1.16.211/api/v1/drivers/');
        console.log('API Response:', response.data);
        setDrivers(response.data.results);
      } catch (err) {
        console.error('Ошибка при загрузке данных о водителях:', err);
        setError(err.message);
      }
    };

    fetchDrivers();
  }, []);

  if (error) {
    return <Alert severity="error">Ошибка при загрузке данных о водителях: {error}</Alert>;
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" gutterBottom align="center" className="text-white">
          Водители
        </Typography>
        <TableContainer component={Paper} className="bg-gray-900 text-white">
          <Table aria-label="таблица водителей" className="min-w-full">
            <TableHead>
              <TableRow className="bg-gray-800">
                <TableCell className="text-gray-400">ID</TableCell>
                <TableCell className="text-gray-400">Фамилия</TableCell>
                <TableCell className="text-gray-400">Имя</TableCell>
                <TableCell className="text-gray-400">Отчество</TableCell>
                <TableCell className="text-gray-400">Паспорт</TableCell>
                <TableCell className="text-gray-400">Водительское удостоверение</TableCell>
                <TableCell className="text-gray-400">Телефон</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drivers.length > 0 ? (
                drivers.map(driver => (
                  <TableRow key={driver.id} className="hover:bg-gray-800">
                    <TableCell>{driver.id}</TableCell>
                    <TableCell>{driver.surname}</TableCell>
                    <TableCell>{driver.name}</TableCell>
                    <TableCell>{driver.last_name}</TableCell>
                    <TableCell>{driver.passport ? driver.passport : 'N/A'}</TableCell>
                    <TableCell>{driver.drivers_license ? driver.drivers_license : 'N/A'}</TableCell>
                    <TableCell>{driver.phone ? driver.phone : 'N/A'}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    Водители не найдены
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default DriversPage;
