import { useEffect, useState } from "react";

const fetchDogsData = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await response.json();
  return dog.message;
}

export default function DogPics () {
  // API: https://dog.ceo/dog-api/
    const [dogPic, setDogPic] = useState('');
    useEffect(() => {
      fetchDogsData().then(pic => setDogPic(pic))
    }, [])
    return (
      <div className='dog-pics'>
        <img src={dogPic} />
        <button onClick={async e => setDogPic(await fetchDogsData())}>🐶</button>
      </div>
    )
  }
