import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Warda Fatima",
            title: "Software Developer",
            img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg",
            icon: "assets/youtube.png",
            desc: "Great Developer, highly good in maintaining existing apps,Great friend of mine. ",
            featured: true

        },
        {
            id: 2,
            name: "Pirha Masood",
            title: "Pharmacist",
            img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg",
            icon: "assets/youtube.png",
            desc: "i want to collaborate with you in future. great work",
            featured: true
        },
        {
            id: 3,
            name: "Fida Hussain",
            title: "Founder of Mega Associate",
            img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg",
            icon: "assets/youtube.png",
            desc: "Heighly appreciative work of yours. want to work again in future.",
            featured: true

        },
    ];
    return (
        <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
        {data.map((d)=>(
            <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
                <img src="assets/right-arrow.png" className="left" alt=""/>
                <img className="user" src={"../../../assets/placeholder.png"} alt=""/>
                {/* <img src={d.icon} className="right" alt=""/> */}
                           
            </div>
            <div className="center">
        {d.desc} 
            </div>
            <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
            </div>
            </div>
            ))}
        </div>
            
        </div>
    )
}
