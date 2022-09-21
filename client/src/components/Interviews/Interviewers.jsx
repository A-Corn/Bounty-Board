import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const interviewers = () => {
    return (
        <div>
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
                <Link to='/api/interview_form'>
                    <button className="btn btn-primary mb-5">Add New Interview</button>
                </Link>
        </div>
    );
};

interviewers.propTypes = {};

export default interviewers;