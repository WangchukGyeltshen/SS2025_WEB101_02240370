import React, { useState } from 'react';

function App() {
    return (
        <div className="app">
            <Header />
            <Dashboard />
        </div>
    );
}

function ProfileCard({ user }) {
    return (
        <div className="profile-card">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <img src={user.avatar} alt="Profile" />
        </div>
    );
}

function Dashboard() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: "Karma Tashi",
        bio: "Web Developer",
        avatar: "profile.jpg"
    });

    return (
        <div>
            <ProfileCard user={userData} />
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit Profile"}
            </button>
            {isEditing && <EditForm />}
        </div>
    );
}

function EditForm() {
    return <div>Edit Form Placeholder</div>; // Replace with your form content
}

function Header() {
    return <h1>User Dashboard</h1>; // Replace with your header content
}

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function Parent() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <Button onClick={handleClick}>
            Click Me
        </Button>
    );
}

export default App;
