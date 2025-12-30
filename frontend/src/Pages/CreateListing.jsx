import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function CreateListing() {
  const { token } = useContext(AuthContext);
  const [title, setTitle] = useState("");

  const submit = async () => {
    await fetch("http://localhost:5000/api/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({ title })
    });
  };

  return (
    <div className="p-4">
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <button onClick={submit}>Create</button>
    </div>
  );
}
