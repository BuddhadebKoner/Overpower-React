import React from 'react'
import assets from '../../../assets/icons/icons'
import { profiledetails } from '../../../assets/documentdata'

// styles are here
import '../../../Styles/ProfilePhoto.css'

export default function ProfilePhoto() {
    return (
        <>
            <div className="profile-photobox">
                <img src={assets.profile} alt="" />
            </div>
            <div className="profile-name">
                <h3>Buddhadeb Koner</h3>
                <p>{profiledetails.bio}</p>
            </div>

        </>
    )
}
