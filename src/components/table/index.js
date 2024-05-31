import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Modal, Form, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

const TableComponent = ({ columns, initialData }) => {
  const [dataSource, setDataSource] = useState(initialData);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
      const storedData = localStorage.getItem('tableData');
      if (storedData) {
          setDataSource(JSON.parse(storedData));
      }
  }, []);

  useEffect(() => {
      localStorage.setItem('tableData', JSON.stringify(dataSource));
  }, [dataSource]);

  const handleSearch = (value) => {
      setSearchText(value);
  };

  const handleAdd = () => {
    console.log('form', form.getFieldError());
    if (form.getFieldsError()) {
      return false
    } else {
      form.validateFields().then(values => {
        setDataSource([...dataSource, values]);
        form.resetFields();
        setIsModalVisible(false);
      });
    }
  };

  const handleDelete = (key) => {
      const newData = dataSource.filter((item) => item.key !== key);
      setDataSource(newData);
  };

  const filteredData = dataSource.filter(item =>
      Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
  );

  const columnsWithActions = [
      ...columns,
      {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
              <Button onClick={() => handleDelete(record.key)}>Delete</Button>
          ),
      },
  ];

  return (
    <div>
      <Search
          placeholder="Search in table"
          onSearch={handleSearch}
          style={{ marginBottom: 20 }}
      />
      <Button
          type="primary"
          onClick={() => setIsModalVisible(true)}
          icon={<PlusOutlined />}
          style={{ marginBottom: 20 }}
      >
          Add Data
      </Button>
      <Table columns={columnsWithActions} dataSource={filteredData} />

      <Modal
          title="Add Data"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onOk={handleAdd}
      >
        <Form form={form} layout="vertical">
          {columns.map((col) => (
            console.log(col),
            <Form.Item
              key={col.dataIndex}
              name={col.dataIndex}
              label={col.title}
              rules={[{ required: true, message: `Please input ${col.title}!` }]}
            >
              {col.dataIndex === 'age' ? (
                <InputNumber />
              ) : (
                <Input />
              )}
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </div>
  );
};

export default TableComponent;
