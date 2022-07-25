import {useState, useEffect} from "react"
import {supabase} from '../supabase/client'
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()

  try {
  
  
   await supabase.auth.signIn({
      email,
    });
  } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    if (supabase.auth.user()) {
      navigate("/")  
     }
    },[navigate])

  return (
    <div>
      <h1>hola</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e)=> setEmail(e.target.value)}
        />
       <button>Send</button>
      </form>
    </div>
  )
}

export default Login