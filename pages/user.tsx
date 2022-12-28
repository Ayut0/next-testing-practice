import React, { useState, useEffect, use } from 'react';
import type { NextPage } from 'next';
import axios from "axios"

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
}

const UserPage: NextPage = () => {
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<string>("");

    const getUser = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users/1");
            
            const userInfo = {
                id: response.data.id,
                name: response.data.name,
                username: response.data.username,
                email: response.data.email
            };
            setUser(userInfo);
        } catch (e) {
            setError("Unfortunately your request failed");
        }
    }
  return (
      <div>
          {!user && !error && (
              <>
                <span>No user data found</span>
                <button onClick={getUser}>Get user info</button>
              </>
          )}
          {user && <h3>Name: {user.name}</h3>}
          {error && <span data-testid="error">{error}</span>}
    </div>
  )
}

export default UserPage