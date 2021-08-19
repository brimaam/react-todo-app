import React from 'react'
import error from '../../images/error.png'
function NotFoundPage() {
    return (
        <div className="container">
            <div className="card center-align hoverable">
                <h1 className="title animate__animated animate__fadeInDown">Not Found Page!</h1>
                <img src={error} alt="To do List" className="animate__animated animate__tada animate__infinite animate__slower"/> 
            </div>
        </div>
    )
}

export default NotFoundPage
