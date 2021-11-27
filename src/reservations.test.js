describe('MovieReservations counter controller test to be a number', () => {
  const reserve = [];
  const counterReservations = (reserve) => {
    const result = reserve ? `Reservations(${reserve.length})` : 'Reservations(0)';
    return result;
  };
  test('Number of reservations', () => {
    expect(counterReservations(reserve)).toEqual('Reservations(0)');
  });
});

describe('MovieReservations counter controller test to be a number', () => {
  const reserve = ['mock-Reservation 1', 'mock-Reservation 2'];
  const counterReservations = (reserve) => {
    const result = reserve ? `Reservations(${reserve.length})` : 'Reservations(0)';
    return result;
  };
  test('Number of reservations', () => {
    expect(counterReservations(reserve)).toEqual('Reservations(2)');
  });
});