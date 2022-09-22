import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
const Networking = () => {
    return (
        <div>
            <Navbar/>
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Position</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Date Applied</th>
                            <th scope="col">Next Step</th>
                        </tr>
                </thead>
            </table>
                <Link to='/api/network_form'>
                    <button className="btn btn-primary mb-5">Add New Contact</button>
                </Link>
        </div>
    );
};


export default Networking;