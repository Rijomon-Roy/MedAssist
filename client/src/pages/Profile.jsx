import { useEffect, useState } from "react";
import { getUserProfile } from "../services/userService";
import Layout from "../components/Layout";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getUserProfile();
      setProfile(res);
    } catch (error) {
      console.error(error);
    }
  };

  if (!profile) {
    return (
      <Layout>
        <h2>Loading...</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container">
        <h1>My Profile</h1>

        <hr />

        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Gender:</strong> {profile.gender}</p>
        <p><strong>Date of Birth:</strong> {profile.dateOfBirth?.slice(0,10)}</p>
        <p><strong>Blood Group:</strong> {profile.bloodGroup}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Emergency Contact:</strong> {profile.emergencyContact}</p>
      </div>
    </Layout>
  );
}

export default Profile;