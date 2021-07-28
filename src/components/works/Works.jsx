import "./works.scss"
import { useEffect, useState } from "react";
export default function Works() {
    const[currentSlide,setCurrentSlide]= useState(0)
    const data=[
        {
            id: 1,
            icon: "assets/mobile.png",
            title: "Mobile App",
            desc: "A flower is the reproductive part of flowering plants.Flowers are also called the bloom or blossom of a plant."
            
        },
        {
            id: 2,
            icon: "assets/mobile.png",
            title: "Web App",
            desc: "A flower is the reproductive part of flowering plants.Flowers are also called the bloom or blossom of a plant."
            
        },
        {
            id: 3,
            icon: "assets/mobile.png",
            title: "Design",
            desc: "A flower is the reproductive part of flowering plants.Flowers are also called the bloom or blossom of a plant."
            
        },
    ];
    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1 : 0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide *100}vw)`}}>
            {data.map(d=>(<div className="container">
                <div className="item">
                <div className="left">
                    <div className="leftContainer">
                        <div className="imgContainer">
                            <img src={d.icon} alt="mobile"/>
                        </div>
                        <h2>{d.title}</h2>
                        <p>{d.desc}</p>
                        <span>Projects</span>
                    </div>
                </div>
                <div className="right">
                    <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"/>
                </div>
                </div>
            </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={()=> handleClick()}/>
        </div>
    )
}
