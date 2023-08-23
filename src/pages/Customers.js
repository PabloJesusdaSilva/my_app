import {useState, useEffect} from "react";
import axios from "axios";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  console.log(customers)

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        const { data } = res.data
        setCustomers(data)
      })
  }, [])

  return (
    <>
      <h1>Customers</h1>
    </>
  );
}

export default Customers;