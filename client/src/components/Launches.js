import React from 'react'
import { gql, useQuery } from '@apollo/client';
import {LaunchItem} from './LaunchItem'
import {MissionKey} from './MissionKey'

const LAUNCHES_QUERY = gql`
query LaunchesQuery{
    launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
    }    
  }
`;

export const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4>Error :(</h4>;

        return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey />
            {
                data.launches.map((launch)=> <LaunchItem key={launch.flight_number} launch={launch}/>)
            }
        </div>
    )
}
