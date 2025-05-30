import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobList from './JobList';
import { PostedJobs } from '../../api/postedJobsApi';

const MyJobs = () => {
    const { user } = useAuth()
    return (
        <div>
            <Suspense fallback={<p>System is loading</p>}>
                <JobList postedJobs={PostedJobs(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyJobs;