import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

const PetDash = () => {
    const [pets, setPets] = useState(null)

    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    })

    return (
        <div>
            <h1>Pets Dashboard</h1>
            <Link to="/pets/new">make a new pet</Link>
            {
                pets ? (

                    <table>
                        <thead>
                            <tr>
                                <td>Pet Name</td>
                                <td>Pet Type</td>
                                <td>actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pets.map((pet, i) => (

                                    <tr key={i}>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td><Link to={`/pets/${pet._id}/edit`}>Edit</Link>|<Link to={`/pets/${pet._id}`}>Details</Link></td>
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    ):
                    <h1>Loading..</h1>
                    }
        </div>
    )
}
export default PetDash;
