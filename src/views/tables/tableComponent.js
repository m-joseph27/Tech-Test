import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const TableComponent = () => {
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

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

  useEffect(() => {
    const data = localStorage.getItem('tableData');
    if (data) {
      setDataSource(JSON.parse(data));
    } else {
      setDataSource(initialData);
      localStorage.setItem('tableData', JSON.stringify(initialData));
    }
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const handleAdd = () => {
    const newData = {
      key: dataSource.length + 1,
      name: `New Name ${dataSource.length + 1}`,
      age: 32,
      address: `New Address ${dataSource.length + 1}`,
    };
    const updatedDataSource = [...dataSource, newData];
    setDataSource(updatedDataSource);
    localStorage.setItem('tableData', JSON.stringify(updatedDataSource));
  };

  const handleDelete = key => {
    const updatedDataSource = dataSource.filter(item => item.key !== key);
    setDataSource(updatedDataSource);
    localStorage.setItem('tableData', JSON.stringify(updatedDataSource));
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    render: text =>
      searchedColumn === dataIndex ? (
        <span>{text}</span>
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Button type="link" onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        ) : null,
    },
  ];

  return (
    <div style={{ marginTop: 90 }}>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default TableComponent;
