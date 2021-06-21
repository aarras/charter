import React from 'react'
import Layout from '../Layout'
import AllCustomers from '../Components/AllCustomers';

export default () => {  
  return (
    <Layout>
      <div style={{ marginTop: '30px', marginLeft: '60px' }}>
        <div className="h1">Customer List</div>
        <AllCustomers />
      </div>
    </Layout>
  )
}