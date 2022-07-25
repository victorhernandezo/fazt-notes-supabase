import {useEffect, useContext} from 'react'
import {supabase} from '../supabase/client'
import {useNavigate} from 'react-router-dom'
import TaskForm from '../components/TaskForm'
import {useTasks} from '../context/TaskContext'
import TaskList from '../components/TaskList'

function Home() {
  const  navigate = useNavigate();
 const {tasks} = useTasks();

  useEffect(() => {
   if (!supabase.auth.user()){
      navigate('/login')
   }
  },[navigate])
  return (
    <div>Home
      <button onClick = {()=> supabase.auth.signOut()}> Logout </button>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default Home