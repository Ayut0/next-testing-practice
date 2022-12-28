import React from "react";

type User = {
  id: number;
  name: string;
};

type CardsProps = {
  userInfos: User[];
};

const Cards: React.FC<CardsProps> = ({ userInfos }) => {
  return (
    <>
          {userInfos.length === 0 ? (
              <span>There is no user info</span>
          ) : (
                  <ul>
                      {userInfos.map((userInfo) => (
                          <li key={userInfo.id}>
                              id:{userInfo.id} name:{userInfo.name}
                          </li>
                      ))}
                  </ul>
      )}
    </>
  );
};

export default Cards;
