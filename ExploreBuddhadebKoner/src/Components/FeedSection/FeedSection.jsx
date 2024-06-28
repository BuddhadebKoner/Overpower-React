import React from 'react'
import Mypost from '../Mypost/Mypost'
import Aboutcard from '../Aboutcard/Aboutcard'
import Feedback from '../Feedback/Feedback'

import '../../Styles/FeedSection.css'

export default function FeedSection() {
    return (
        <>
            <div className="main-section-about-feed">
                <Aboutcard />
                <Feedback />
                <Mypost />
            </div>
        </>
    )
}
