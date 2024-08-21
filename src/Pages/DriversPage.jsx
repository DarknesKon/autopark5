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
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#333' }}>
          Водители
        </Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: '#f9fafb', borderRadius: 1, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <Table aria-label="таблица водителей">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e5e7eb' }}>
                <TableCell sx={{ color: '#111', fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ color: '#111', fontWeight: 'bold' }}>Фамилия</TableCell>
                <TableCell sx={{ color: '#111', fontWeight: 'bold' }}>Имя</TableCell>
                <TableCell sx={{ color: '#111', fontWeight: 'bold' }}>Отчество</TableCell>
                <TableCell sx={{ color: '#111', fontWeight: 'bold' }}>Паспорт</TableCell>
                <TableCell sx={{ color: '#111', fontWeight: 'bold' }}>Водительское удостоверение</TableCell>
                <TableCell sx={{ color: '#111', fontWeight: 'bold' }}>Телефон</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drivers.length > 0 ? (
                drivers.map(driver => (
                  <TableRow key={driver.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f3f4f6' } }}>
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
