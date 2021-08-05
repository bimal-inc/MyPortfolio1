import React from 'react'
import Portlist from '../portlist/Portlist';
import "./portfolio.scss"
import { useEffect, useState } from 'react';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data";

const Portfolio = () => {

    
    const [selected, setSelected] = useState("featured");

    const [Data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "design",
            title: "Design",
          },
          {
            id: "content",
            title: "Content",
          },
        ];

        useEffect(()=>{

            switch(selected){
                case "featured":
                setData(featuredPortfolio);
                break;
                case "web":
                setData(webPortfolio);
                break;
                case "mobile":
                setData(mobilePortfolio);
                break;
                case "featured":
                setData(featuredPortfolio);
                break;
                case "design":
                setData(designPortfolio);
                break;
                case "content":
                setData(contentPortfolio);
                break;
                default:
                    setData(featuredPortfolio);


            }


        },[selected])
    
    return (
        <div className="portfolio" id="portfolio">
                <h1>Portfolio</h1>
                <ul>
                {list.map((item) => (
          <Portlist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />

                    ))}
                    
                </ul>
                <div className="container">
                    {Data.map((d)=>(


                        <div className="item">
                            <img src={d.img} alt="" />
                    
                    <h3>{d.title}</h3>
                        </div>                 
                    
                        ))}
                </div>
            
        </div>
    )
}

export default Portfolio
