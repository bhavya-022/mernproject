/*const User = ({ name, age }) => {

  const skills = ["Java", "React", "JS"];

  const handleClick = () => {
    alert("done");
  };

  return (
    <>
      <div>User name = {name}</div>
      <h3>User age = {age}</h3>

      <button onClick={handleClick}>Click</button>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};
export default User;*/
import React from 'react'

const User = ({name,age,skills}) => {
  return (
    <>
    <div>User name={name}</div>
    <h3>User age={age}</h3>
    <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  )
}

export default User