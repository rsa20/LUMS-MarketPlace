import './Fh.css';
import { Link } from 'react-router-dom';

const ProfileHeader = ()=>{
    return(
        <div className="profile-header">
            <div className='container'>

                <div className="profile-header-btn">
                    <a className='linkk' href='www.google.com' target='blank'>Profile</a>
                </div>

                <div className="profile-header-btn">
                    <Link to='/edit'>
                        <a className='linkk' href='http://localhost:3000/Edit' >Edit & delete</a>
                    </Link>
                </div>

                <div className="profile-header-btn">
                    <Link to = '/viewPosts'>
                        <a className='linkk' href='www.google.com' target='blank'>My Ads</a>
                    </Link>
                </div>

                <div className="profile-header-btn">
                    <a className='linkk' href='www.google.com' target='blank'>Reviews</a>
                </div>

            </div>
        </div>
    )
};

export default ProfileHeader;