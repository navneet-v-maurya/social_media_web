import React, { useEffect } from "react";
import { toast } from "react-toastify";

function Home() {
  useEffect(() => {
    toast.success("Login success");
  }, []);

  return <div>Home</div>;
}

export default Home;
