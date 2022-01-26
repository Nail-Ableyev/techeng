import React from "react"
import masterlist from "../source.json";
import MyCard from "./MyCard";

function PictureWordFlipper({target}){

    const listOfCards = masterlist[target].map(item => <MyCard key={item} front={<img src={`${process.env.PUBLIC_URL}/img/${target}/${item}.jpg`}/>} back={item} isFlipped={false}/>)

    return listOfCards
}
export default PictureWordFlipper