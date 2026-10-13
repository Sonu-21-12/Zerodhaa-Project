import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
const navigate = useNavigate();
const [username, setUsername] = useState("");
const [loading, setLoading] = useState(true);

useEffect(() => {
let active = true;


const verifyCookie = async () => {
  try {
    const { data } = await axios.post(
      "https://zerodhaa-project.onrender.com/",
      {},
      { withCredentials: true }
    );

    if (data.status && data.user) {
      if (active) {
        setUsername(data.user);
        toast.success(`Hello ${data.user}`, {
          position: "top-right",
        });
      }
    } else {
      navigate("/login", { replace: true });
    }
  } catch (error) {
    console.error(
      "User verification failed:",
      error.response?.data || error.message
    );

    if (active) {
      navigate("/login", { replace: true });
    }
  } finally {
    if (active) {
      setLoading(false);
    }
  }
};

verifyCookie();

return () => {
  active = false;
};


}, [navigate]);

const Logout = async () => {
// Backend logout endpoint banne ke baad yahan
// server se token cookie clear karwani hogi.
navigate("/login", { replace: true });
};

if (loading) {
return <p>Checking login...</p>;
}

return (
<> <div className="home_page"> <h4>
Welcome <span>{username}</span> </h4>


    <button onClick={Logout}>LOGOUT</button>
  </div>

  <ToastContainer />
</>


);
};

export default Home;
