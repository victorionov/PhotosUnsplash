import { useEffect, useState } from "react";
import { CardList } from "../CardsList";
import { fetchRandomPhoto } from "../../Unsplash";
import './Card.css';

export function Card() {
  const [photoUrl, setPhotoUrl] = useState<string>("");

  useEffect(() => {
    const getPhoto = async () => {
      const url = await fetchRandomPhoto();
      setPhotoUrl(url);
    };

    getPhoto();
  }, []);

  return (
    <div className="card">
      <img className="photo" src={photoUrl} alt="Random photo form Unsplash" />
      <h1>Title</h1>
      <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus!</div>
      <button className="button_buy">BUY</button>
    </div>
  );
}
