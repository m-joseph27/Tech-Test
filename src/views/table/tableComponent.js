import React, { useState, useEffect } from 'react';
import ChakraTableComponent from '../../components/table/table';
import AddDataModal from '../../components/modal/addModal';
import { TableSearch } from '../../components/searchBar/tableSearch';
import {
  Box,
  Button,
  useDisclosure,
  useColorMode,
  useToast
} from '@chakra-ui/react';

const ViewTableComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const toast = useToast();

  const [formData, setFormData] = useState({ name: '', age: '', address: '' });
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState('');
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const dummyData = [
      { name: 'John Doe', age: '30', address: '123 Main St' },
      { name: 'Jane Smith', age: '25', address: '456 Oak St' },
      { name: 'Bob Johnson', age: '40', address: '789 Pine St' }
    ];

    const storedData = localStorage.getItem('tableData');
    if (storedData) {
      setDataSource(JSON.parse(storedData));
    } else {
      setDataSource(dummyData);
    }
  }, []);

  useEffect(() => {
    if (dataSource.length > 0) {
      localStorage.setItem('tableData', JSON.stringify(dataSource));
    }
  }, [dataSource]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age' && !/^\d*$/.test(value)) {
      return;
    }
  
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.age) tempErrors.age = "Age is required";
    if (!formData.address) tempErrors.address = "Address is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleAddData = () => {
    if (validate()) {
      setDataSource([...dataSource, formData]);
      setFormData({ name: '', age: '', address: '' });
      onClose();
      toast({
        title: 'Success',
        description: "Profile created successfully",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleDelete = (index) => {
    const newData = [...dataSource];
    newData.splice(index, 1);
    setDataSource(newData);
    toast({
      title: 'Success',
      description: "Profile deleted successfully",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  const filteredData = dataSource.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      pt={{ base: '130px', md: '80px', xl: '80px' }}
      pl={{ base: '0', md: '15px', xl: '15px' }}
      mt="15px">
      <TableSearch
        search={search}
        setSearch={setSearch}
        mb="20px"
        me="10px"
        borderRadius="10px"
        background={colorMode === 'dark' ? '#0F0F0F' : '#FFFF'}
      />
      <Box mt="20px" mb="10px">
        <Button onClick={onOpen} colorScheme="blue" mb={4}>Add Data</Button>
      </Box>
      <Box>
        <ChakraTableComponent data={filteredData} handleDelete={handleDelete} />
      </Box>
      <Box>
        <AddDataModal
          isOpen={isOpen}
          onClose={onClose}
          formData={formData}
          handleInputChange={handleInputChange}
          handleAddData={handleAddData}
          errors={errors}
        />
      </Box>
    </Box>
  );
};

export default ViewTableComponent;
