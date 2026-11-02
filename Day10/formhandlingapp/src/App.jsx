
import { useState } from "react";

const App = () => {

  const [showData, setShowData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [showDatas, setShowDatas] = useState([]);

  const handleChange = (e) => {

    setShowData({
      ...showData,
      [e.target.name]: e.target.value
    });

  };

  const handleClick = (e) => {

    e.preventDefault();

    if (!showData.name || !showData.email || !showData.age) {
      alert("Fill the form");
      return;
    }

    let datas = {
      id: Date.now(),
      name: showData.name,
      email: showData.email,
      age: showData.age
    };

    let copy = [...showDatas];

    copy.push(datas);

    setShowDatas(copy);

    setShowData({
      name: "",
      email: "",
      age: ""
    });

  };

  return (
    <>
      <form onSubmit={handleClick}>

        <input
          type="text"
          placeholder="Enter the Name"
          name="name"
          value={showData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Enter the Email"
          name="email"
          value={showData.email}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Enter the Age"
          name="age"
          value={showData.age}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {showDatas.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
