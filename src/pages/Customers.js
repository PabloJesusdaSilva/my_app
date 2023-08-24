import {useState, useEffect} from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

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
    <Grid container>
      {
        customers.map(customer => {
          return (
            <Grid item xs={12} md={4} sx={{p: 2}}>
              <CustomersCard 
                name={customer.first_name}
                lastname={customer.last_name}
                avatar={customer.avatar}
                email={customer.email}
                />
            </Grid>
          )
        })
      } 
    </Grid>
  );
}

export default Customers;