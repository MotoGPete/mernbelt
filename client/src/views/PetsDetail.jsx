import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom"
import {useHistory} from "react-router-dom"

const PetDetail  = () => {
const [pet, setPet] = useState("")
const {id} = useParams()
const history = useHistory()

const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(res => history.push("/"))
        .catch(err => console.log(err))
}

useEffect(()=> {
    axios.get(`http://localhost:8000/api/pets/${id}`)
    .then(res=>setPet(res.data))
    .catch(err=>console.log(err))

},[id])


    return (
    <div>
        {pet?(
            <div>
        <h1> Pet Details</h1>
        <h3>Name: {pet.name}</h3>
        <h3>type: {pet.type}</h3>
        <h3>description: {pet.description}</h3>

        {
            pet.skill1?(
                <h3>Skills: {pet.skill1}</h3>
            ):<h4> pet has no skills</h4>
        }
        {
            pet.skill2?(
                <h3>{pet.skill2}</h3>
            ):<></>
        }
         {
            pet.skill3?(
                <h3>{pet.skill3}</h3>
            ):<></>
        }
        </div>
        ): <h1>loading</h1>
    }
    <button onClick={e => deleteHandler(pet._id)}>Adopt   {pet.name}</button>
    <Link to="/">Go Back</Link>
    </div>
        
    )
};

export default PetDetail;