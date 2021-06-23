import React from 'react'
import Layout from '../Layout'
import CustomerComponent from '../Components/CustomerComponent';

export default () => {  
  return (
    <Layout>
      <div style={{ marginTop: '30px', marginLeft: '60px' }}>
        <div className="h1">Customer Details</div>
        <CustomerComponent />
      </div>
    </Layout>
  )
}