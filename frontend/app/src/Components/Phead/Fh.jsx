import './Fh.css';

const ProfileHeader = ()=>{
    return(
        <div className="profile-header">
            <div className='container'>

                <div className="profile-header-btn">
                    <a className='linkk' href='www.google.com' target='blank'>Profile</a>
                </div>

                <div className="profile-header-btn">
                    <a className='linkk' href='http://localhost:3000/Edit' target='blank'>Edit & delete</a>
                </div>

                <div className="profile-header-btn">
                    <a className='linkk' href='www.google.com' target='blank'>My Ads</a>
                </div>

                <div className="profile-header-btn">
                    <a className='linkk' href='www.google.com' target='blank'>Reviews</a>
                </div>

            </div>
        </div>
    )
};

export default ProfileHeader;