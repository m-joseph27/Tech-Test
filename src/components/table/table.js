import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from '@chakra-ui/react';

const ChakraTableComponent = ({ data, handleDelete }) => {
  return (
    <TableContainer>
      <Table
        variant="striped"
        border="1px"
        borderColor="gray.300">
        <Thead>
          <Tr>
            <Th border="1px" borderColor="gray.300">Name</Th>
            <Th border="1px" borderColor="gray.300">Age</Th>
            <Th border="1px" borderColor="gray.300">Address</Th>
            <Th border="1px" borderColor="gray.300">Actions</Th>
          </Tr>
        </Thead>
        <Tbody border="1px" borderColor="gray.200">
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.name}</Td>
              <Td>{item.age}</Td>
              <Td>{item.address}</Td>
              <Td>
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ChakraTableComponent;