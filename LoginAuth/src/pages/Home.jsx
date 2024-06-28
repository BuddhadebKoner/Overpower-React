import React from 'react'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="container Home-container">
    <div className="Home-container-inner">
        <h1>Welcome to Appwrite Login Authentication</h1>
        <p>Use this authentication template to efficiently work on your project.</p>
        <p className='explore-link'>
            For more, explore here:
            <a href="https://github.com/BuddhadebKoner/AppWrite-Learning/tree/main/LoginAuth" target='_blank'>
                <img
                    className='github-logo'
                    style={{width: '40px', height: '40px'}}
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub logo" />
            </a>
        </p>
    </div>
</div>

    )
}

export default Home
