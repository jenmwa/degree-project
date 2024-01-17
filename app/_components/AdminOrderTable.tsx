export const AdminOrderTable = () => {
  return (
    <>
      <h3>Bookings:</h3>
      <section>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Order nummer</th>
              <th>Produkt</th>
              <th>Datum för produkt</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>Produkt1</td>
              <td>2024-02-14</td>
              <td>request</td>
            </tr>
            <tr>
              <td>id</td>
              <td>Produkt2</td>
              <td>2024-02-13</td>
              <td>request</td>
            </tr>
            <tr>
              <td>id</td>
              <td>Produkt3</td>
              <td>2024-02-15</td>
              <td>request</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
export default AdminOrderTable;
