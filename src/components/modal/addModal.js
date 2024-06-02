import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';

const AddDataModal = ({ isOpen, onClose, formData, handleInputChange, handleAddData, errors }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Data</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={errors.name} mb={3}>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.age} mb={3}>
            <FormLabel>Age</FormLabel>
            <Input
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
            <FormErrorMessage>{errors.age}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.address} mb={3}>
            <FormLabel>Address</FormLabel>
            <Input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <FormErrorMessage>{errors.address}</FormErrorMessage>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleAddData}>Add</Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddDataModal;