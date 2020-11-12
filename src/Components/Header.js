import React from 'react';
import { Link } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import { GrFormAdd } from "react-icons/gr";

function Header(){
    
    const nav = [
        {ID: 1, label: "Mobile Phones"},
        {ID: 2, label: "Cars"},
        {ID: 3, label: "Motorcycles"},
        {ID: 4, label: "Houses"},
        {ID: 5, label: "TV-Video-Audio"},
        {ID: 6, label: "Tablets"},
        {ID: 7, label: "Lands & Plots"}
    ]

    return(
        <React.Fragment>
        <div className="header fixed flex">
            <div className="logo">
              <img src={"../ui/Logo.png"}/>
            </div>
            <div className="location rel flex alc">
                <div className="icon-search ico s24"/>
                <FaSistrix/>
                <input className="label s15 font" placeholder="Search city, area or loc..."/>
                <button className="arro s16"><FaAngleDown/></button>
            </div>
            <div className="search flex alc">
                <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="inp font s15"/>
                <button className="go s18 cfff"><FaSistrix/></button>
            </div>
            <div className="actions flex alc">
                <Link to="/account/signin" className=" color fontb s16 noulh">Login</Link>
                <button className="sell flex alc color">
                       <div className="ico s24"><GrFormAdd/></div>
                       <h2 className="s18 fontb">Sell</h2>
                   </button>
            </div>
        </div>
        <div className="hnav fixed flex alc">
            <button className="view-cates color">
                <h2 className="s16 font b">All categories  <FaAngleDown/></h2>
            </button>
            {
                nav.map(item =>{
                    return(
                        <Link to={"/browser/" + item.label} className="names color noul bl">{item.label}</Link>
                    )
                })
            }
        </div>
        <div className="hclr"/>
        <div>
            <img className="picture" src="//statics.olx.com.pk/external/base/img/hero_bg_pk.jpg"/>
        </div>
        </React.Fragment>
    );
}

export default Header;