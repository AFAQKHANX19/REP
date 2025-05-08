'use client';
import React, { useState, useEffect } from 'react';
import Title from "./Title";
import TeamItem from "./TeamItem";
import { userService } from '../Services/api';
import { toast } from 'react-hot-toast'; // Assuming you're using react-hot-toast for notifications

const TeamList = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const title = {
        text: "Our Team",
        description: "Meet our professional team members",
        designation: "Designation"
    };

    // Fetch team members on component mount
    useEffect(() => {
        fetchTeamMembers();
    }, []);

    const fetchTeamMembers = async () => {
        try {
            setIsLoading(true);
            const data = await userService.getAllUsers();
            // Only show active users if you have an isActive field
            const activeMembers = data.filter(user => user.isActive !== false);
            setTeamMembers(activeMembers);
        } catch (err) {
            setError('Failed to load team members');
            toast.error(`Failed to load team members: ${err.message || err}`);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="section-teams">
            <div className="container">
                <Title title={title.text} description={title.description} designation={title.designation} />
                
                {isLoading ? (
                    <div className="text-center p-10">Loading team members...</div>
                ) : error ? (
                    <div className="text-center p-10 text-red-500">{error}</div>
                ) : (
                    <div className="row">
                        {teamMembers.length > 0 ? (
                            teamMembers.map((member) => (
                                <TeamItem key={member._id} userId={member._id} />
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p>No team members found</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TeamList;