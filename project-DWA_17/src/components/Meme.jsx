import React from "react";
import memesData from "../memesData";

export default function Meme() {
   // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
   const [meme, setMeme] = React.useState({
     topText: "",
     bottomText: "",
     randomImage: "http://i.imgflip.com/1bij.jpg",
   });
   const [allMemeImages, setAllMemeImages ] = React.useState(memesData)
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
       
    }
//added the code for diplaying the text for the meme gen
    function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]:value
      }))
    }
  return (
    <main>
      <div className="form">
        <input 
        type="text" 
        placeholder="top text" 
        className="form--input" 
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        />

        <input 
        type="text" 
        placeholder="bottom text" 
        className="form--input" 
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />

        <button 
        className="form--button"
        onClick={getMemeImage}
        >Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image"/>
        <h2 className="meme--text top">{meme.topText}</h2>  
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
