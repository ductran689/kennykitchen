import React from 'react';
import SubLayout from '../../components/SubLayout';
import Form from '../../components/Form';

export default function index() {
  return (
    <SubLayout topic="FREE Quote Booking" btn={false}>
      <Form></Form>
    </SubLayout>
  );
}
