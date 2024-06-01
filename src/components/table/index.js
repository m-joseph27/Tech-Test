import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Modal, Form, InputNumber, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

const TableComponent = ({ columns, initialData }) => {
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const storedData = localStorage.getItem('tableData');
    if (storedData) {
      setDataSource(JSON.parse(storedData));
    } else {
      setDataSource(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    if (dataSource.length > 0) {
      localStorage.setItem('tableData', JSON.stringify(dataSource));
    }
  }, [dataSource]);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleAdd = () => {
    form.validateFields()
      .then((values) => {
        setDataSource([...dataSource, { ...values, key: Date.now() }]);
        form.resetFields();
        setIsModalVisible(false);
        message.success('Berhasil menambahkan data');
      })
      .catch((info) => {
        message.error('Mohon periksa kesalahan')
      });
  };

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    message.success('Berhasil Menghapus Data');
  };

  const filteredData = dataSource.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const columnsWithActions = [
    ...columns,
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button danger onClick={() => handleDelete(record.key)}>Delete</Button>
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
        onCancel={() => {setIsModalVisible(false); form.resetFields()}}
        onOk={handleAdd}
      >
        <Form form={form} layout="vertical">
          {Array.isArray(columns) && columns.map((col) => (
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