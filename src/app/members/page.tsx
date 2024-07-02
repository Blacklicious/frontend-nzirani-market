'use client';
import React, { useState, useEffect } from 'react';
import MembersProfile from './MembersInformations';
import Dashboard from './MembersDashboard';


const Page: React.FC = () => {
   
    return (
        <div>
            <h1>Members </h1>
            <MembersProfile />
            <Dashboard />
        </div>
    );
};

export default Page;