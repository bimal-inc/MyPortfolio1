import "./testo.scss";

export default function testo() {
  const data = [
    {
      id: 1,
      name: "Vidhan Giri",
      title: "Multimedia Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Honestly, at the end of every season, we sit down and review where we're at.",
    },
    {
      id: 2,
      name: "Jiya Yadav",
      title: "Web Designer",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Hey there, it is an honour to review such a good project and built in only 4 days. Hats off man.",
      featured: true,
    },
    {
      id: 3,
      name: "Rojina Gurung",
      title: "CEO of OPPA",
      img:
        "https://www.teahub.io/photos/full/308-3085158_woman-girl-water-person-sea-ocean-sunset-beach.jpg",
      icon: "assets/linkedin.png",
      desc:
        "안녕하세요, 이것은 보기에 너무 아름다운 사이트이지만 한국의 망할 TV 시리즈에 나오는 내 오빠만큼 아름답지는 않습니다.(Translate)",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonial </h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
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
  );
}
