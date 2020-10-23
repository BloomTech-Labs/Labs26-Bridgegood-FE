import React, { useEffect, useState } from 'react';
import { Layout, Table, Col, Row, Button, Input } from 'antd';
import { ReactComponent as Pencil } from './Assets/Pencil.svg';
import { ReactComponent as TrashCan } from './Assets/TrashCan.svg';
import { CSVLink } from 'react-csv';
import newAxios from '../../../utils/axiosUtils';
import { getOktaAuthToken } from '../../../utils/oktaUtils';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import EditUserModal from './EditUserModal';
import { useSelector } from 'react-redux';

export default function AdminPage() {
  // const { authState } = useOktaAuth();
  const users = useSelector(state => state.admin.users);
  const [allUsers, setAllUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState(allUsers);
  const [search, setSearch] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    setEditingUser(users.filter(user => user.id === editingUserId)[0]);
  }, [editingUserId]);

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
    console.log('All users', allUsers);
    setSearch('');
    setSearchUsers(allUsers);
  }, [allUsers]);

  useEffect(() => {
    setAllUsers(
      users.map(user => {
        return {
          id: user.id,
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          visits: user.visits,
          praises: user.praises,
          demerits: user.demerits,
          created_at: user.created_at,
          lastVisit: new Date(),
          donationTotal: Math.floor(Math.random() * Math.floor(30)),
        };
      })
    );
  }, [users]);

  return (
    <Layout.Content
      style={{
        height: 'calc(100vh - 64px)',
        overflowY: 'scroll',
        padding: '15px',
      }}
    >
      <Row
        style={{
          margin: '0 0 15px',
          display: 'flex',
        }}
      >
        <Col
          span="6"
          style={{
            marginRight: 'auto',
          }}
        >
          <Input
            style={{
              height: '32px',
            }}
            placeholder="Search user..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Col>
        <Col
          span="6"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          <CSVLink
            data={searchUsers}
            separator={','}
            enclosingCharacter={'"'}
            filename="Users.csv"
            headers={Object.keys(allUsers[0] || {}).map(key => ({
              label: key,
              key,
            }))}
          >
            <Button type="input">Export</Button>
          </CSVLink>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <EditUserModal
            visible={editingUserId !== null}
            setEditingUserId={setEditingUserId}
            user={editingUser}
          />
          <UsersTable setEditingUserId={setEditingUserId} users={searchUsers} />
        </Col>
      </Row>
    </Layout.Content>
  );
}

const UsersTable = ({ users, setEditingUserId }) => {
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
      render: amount => `$${amount || 0}`,
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
      render: date => date.split('T')[0],
    },
    {
      dataIndex: 'id',
      key: 'controls',
      render: id => (
        <>
          <Pencil
            className={'hover hover-blue'}
            onClick={() => setEditingUserId(id)}
          />
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
