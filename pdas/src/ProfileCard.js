import React from 'react'

const ProfileCard = props => {
    const { title, handle, image } = props
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt='card logo' />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p>Title is {title}</p>
                    <p>Handle is {handle}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
