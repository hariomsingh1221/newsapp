import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div container='my-5'>
                <div className="card my-5">
                <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left: '90%', marginTop: '2.5%' , zIndex: '1'}}>    {source}
                        <span className='visually-hidden'>Unread message</span>
                        </span>
                    <img src={!imageUrl?"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3Xly20bOXvD89uHHofApzgHaEK%26pid%3DApi&f=1":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... 
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-moted'>By {!author?'Unknown': author} on {new Date(date).toGMTString()}</small></p>
                        {/* <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a> */} {/* This is a sucurity risk according to warning*/} 
                        <a href={newsUrl} target="rel=noopener" className="btn btn-sm btn-dark">Read More</a> {/* This is a recommended rather than above given*/}
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
