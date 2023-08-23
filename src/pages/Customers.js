import {useState, useEffect} from "react";
import axios from "axios";

import CustomersCard from "../components/CustomersCard";

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
      {
        customers.map(customer => {
          <CustomersCard 
            name={customer.first_name}
            lastname={customer.last_name}
            avatar={customer.avatar}
            email={customer.email}
          />
        })
      }
    </>
  );
}

export default Customers;