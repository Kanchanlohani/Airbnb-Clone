import { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/listings")
      .then(res => res.json())
      .then(data => setListings(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {listings.map(l => (
        <ListingCard key={l._id} listing={l} />
      ))}
    </div>
  );
}
