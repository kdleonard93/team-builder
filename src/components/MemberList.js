import React, { useState } from "react";

function MemberList(props) {
  const [teamList, setTeamList] = useState([]);
  return (
    <div>
      {props.teamList.map((member, index) => [
        <div key={index}>
          <h1>Team</h1>
          <h2>Name: {member.name}</h2>
          <h2>Email: {member.email}</h2>
          <h2>Role: {member.role}</h2>
        </div>
      ])}
    </div>
  );
}

export default MemberList;
