import React from "react"

export default function Content(props) {
    return (
        <div className="content-container">
            <img src={`../images/${props.img}`} className="content--image"/>
            <div className="content-details">
                <div className="location-container">
                    <span className="location-logo"></span>
                    <span className="country">{props.country}</span>
                    <span className="map">View on Google Maps</span>
                </div>
                <div className="location">{props.location}</div>
                <div className="date">{props.date}</div>
                <div className="about-location">{props.about}</div>
            </div>
        </div>
    )
}