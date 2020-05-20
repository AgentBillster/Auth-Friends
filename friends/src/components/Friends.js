import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Dudes } from "./Dudes";
import Axios from "axios";

export const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [add, setAdd] = useState({
    name: "",
    age: "",
    email: ""
  });

useEffect(() => {
    getData()
}, [])

  const getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      });
  };

  //-------------------------------FORM STUFF-------------------------//
  const handleChanges = (e) => {
    setAdd({
      ...add,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    
      
    axiosWithAuth().post('/api/friends', add)
    .then((res) => {
        console.log(res);
      })
    .catch((err) => console.log(err.response));
    
    
    
  };
  //-------------------------------FORM STUFF-------------------------//

  return (
    <div>
      <div className="submit">
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={add.name}
            onChange={handleChanges}
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="age"
            name="age"
            value={add.age}
            onChange={handleChanges}
          />
          <br />
          <br />

          <input
            type="text"
            placeholder="email"
            name="email"
            value={add.email}
            onChange={handleChanges}
          />
          <button>submit</button>
        </form>
      </div>

      {friends.map((item) => {
        return <Dudes dudes={item} key={item.id} />;
      })}
    </div>
  );
};
