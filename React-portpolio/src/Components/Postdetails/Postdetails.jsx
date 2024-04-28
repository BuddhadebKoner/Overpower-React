import React from 'react';
import Likebtn from '../Likebtn/Likebtn';
import './Postdetails.css';
import ProfileDetails from '../Mypost/ProfileDetails/ProfileDetails';
import { assets, numberOfAssets } from '../../assets/postimg/postimg';

export default function Postdetails() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                setPosts(Object.values(assets));
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);


    return (
        <>
            {numberOfAssets !== 0 && (
                <>
                    {posts.map((post, index) => (
                        <div key={index} className="postdetails-container">
                            <ProfileDetails media={post.media} Medialink={post.links} postdate ={post.date}/>
                            <div className="post">
                                <img src={post.image} className="postimage" alt="" />
                                <div className="post-details-description">
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                    <Likebtn />
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}
