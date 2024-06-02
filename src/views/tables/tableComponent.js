import React from 'react';
import TableComponent from '../../components/table/index';
import { Box } from '@chakra-ui/react';

const ViewTableComponent = () => {
  const initialData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
  ];

  return (
    <Box
      pt={{ base: '130px', md: '80px', xl: '80px' }}
      pl={{ base:'0', md: '0', xl: '15px' }}>
      <TableComponent columns={columns} initialData={initialData} />
    </Box>
  );
};

export default ViewTableComponent;