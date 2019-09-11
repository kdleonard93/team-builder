import React, { useState } from "react";

const Form = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = event => {
    setTeamMember({ ...teamMember, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTeamMember({ name: "", email: "", role: "" });
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <lable>
          Name:
          <input
            type="text"
            name="name"
            value={teamMember.name}
            onChange={event => handleChange(event)}
          ></input>
        </lable>
        <br />
        <lable>
          Email:
          <input
            type="text"
            name="email"
            value={teamMember.email}
            onChange={event => handleChange(event)}
          ></input>
        </lable>
        <br />
        <lable>
          Role:
          <input
            type="text"
            name="role"
            value={teamMember.role}
            onChange={event => handleChange(event)}
          ></input>
        </lable>
      </form>
    </div>
  );
};

export default Form;
