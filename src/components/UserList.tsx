import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UseTypedSelector } from '../hooks/UseTypedSelector'
import { fetchUsers } from '../store/action-creator/user'
import { useAction } from '../hooks/UseAction'

const UserList: FC = () => {
  const { users, loading, error } = UseTypedSelector(state => state.user)
  const {fetchUsers} = useAction()

  useEffect(() => {
    fetchUsers()
  }, [])

  if  (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error...</h1>
  }

  return (
    <div>
      {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}

export default UserList