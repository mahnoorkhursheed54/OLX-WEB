import React, {useState} from 'react';

function AdItem(props){

    if("placeholder" in props){
    return(
        <div className="ad-item">
           <div className="poster anim placeholder"/>
           <div className="title anim placeholder"/>
           <div className="tagline anim placeholder"/>
           <div className="ftr anim flex"/>
                <div className="anim location placeholder"/>
                <div className="anim stamp placeholder"/>
        </div>
    )}
}

export default AdItem;