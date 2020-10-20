import React, { useEffect, useState } from 'react';
import { Layout, Table, Col, Row, Button, Input } from 'antd';
import { ReactComponent as Pencil } from './Assets/Pencil.svg';
import { ReactComponent as TrashCan } from './Assets/TrashCan.svg';
import { CSVLink } from 'react-csv';
import newAxios from '../../../utils/axiosUtils';
import { getOktaAuthToken } from '../../../utils/oktaUtils';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

export default function AdminPage() {
  const { authState } = useOktaAuth();
  const [allUsers, setAllUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState(allUsers);
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (search) {
      setSearchUsers(
        allUsers.filter(
          person =>
            person.name.toLowerCase().includes(search.toLowerCase()) ||
            person.email.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else setSearchUsers([...allUsers]);
  }, [search]);

  useEffect(() => {
    setSearch('')
    setSearchUsers(allUsers)
  }, [allUsers])

  useEffect(() => {
    const axios = newAxios(getOktaAuthToken(authState));
    axios.get('/users')
      .then(({data}) => {
        setAllUsers(data.map(person => ({
          ...person,
          name: person.first_name + ' ' + person.last_name
        })))
      })
      .catch(err => console.error(err.message))
  }, [])

  return (
    <Layout.Content
      style={{
        height: 'calc(100vh - 64px)',
        overflowY: 'scroll',
        padding: '15px',
      }}
    >
      <Row style={{
        margin: '0 0 15px',
        display: 'flex',
      }}>
        <Col span="6" style={{
          marginRight: 'auto'
        }}>
          <Input
            style={{
              height: '32px'
            }}
            placeholder="Search user..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Col>
        <Col span="6" style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }}>
          <CSVLink data={searchUsers} separator={','} enclosingCharacter={"\""} filename='Users.csv' headers={Object.keys(allUsers[0] || {}).map(key => ({label: key, key}))}>
            <Button type='input'>Export</Button>
          </CSVLink>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <UsersTable users={searchUsers} />
        </Col>
      </Row>
    </Layout.Content>
  );
}

const UsersTable = ({ users }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'E-Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Visits',
      dataIndex: 'visits',
      key: 'visits',
    },
    {
      title: 'Praises',
      dataIndex: 'praises',
      key: 'praises',
    },
    {
      title: 'Demerits',
      dataIndex: 'demerits',
      key: 'demerits',
    },
    {
      title: 'Donation Total',
      dataIndex: 'donationTotal',
      key: 'donationTotal',
      render: amount => `$${amount || 0}`
    },
    {
      title: 'Last Visit',
      dataIndex: 'lastVisit',
      key: 'lastVisit',
      render: () => new Date().toISOString().split('T')[0],
    },
    {
      title: 'Registration Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: date => date.split('T')[0]
    },
    {
      render: () => (
        <>
          <Pencil className={'hover hover-blue'} />
          <TrashCan
            className={'hover'}
            style={{
              marginLeft: '10px',
            }}
          />
        </>
      ),
    },
  ];
  return <Table dataSource={users || []} columns={columns} />;
};
