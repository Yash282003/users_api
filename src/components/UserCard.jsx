// UserCard.jsx
import Card from 'react-bootstrap/Card';
import "./UserCard.css"

const UserCard = ({ users, toggleSidebar }) => {
    return (
        <div className="card-container"> 
            {users.map((user, id) => (
                <Card key={id} body className="user-card">
                    <div className="card-content">
                        <div className="card-image">
                            <img className="card-image" src={user.avatar} alt={user.name} />
                            <div className='card-content-name'>
                            <h3>{user.profile.firstName} {user.profile.lastName}</h3>
                            <p>{user.jobTitle}</p>
                            </div>
                            
                        </div>
                        <div className="card-button">
                            <button className="btn btn-primary" onClick={() => toggleSidebar(user)}>View Details</button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default UserCard;
