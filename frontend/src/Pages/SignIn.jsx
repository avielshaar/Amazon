import { useState } from "react"
import axios from "axios"
import Container from "react-bootstrap/Container"
import Title from "../Components/Shared/Title"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post("/api/v1/users/signin",{email: email, password: password});
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
    
  }
  return (
    <Container className="small-container">
      <Title title="SignIn Page"/>
    </Container>
  )
}

export default SignIn