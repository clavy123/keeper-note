import React from "react";
import { Highlight } from "@material-ui/icons";
import { Button } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  function handleLogOut(){
    fetch("http://localhost:5000/api/v1/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((response) => {
            if (response.ok) {
                navigate("/");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
  }
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>
        <Highlight />
        Keeper
      </h1>
      <Button colorScheme="teal" variant="solid" color={"white"} onClick={handleLogOut}>
        Logout
      </Button>
    </header>
  );
}
export default Header;
