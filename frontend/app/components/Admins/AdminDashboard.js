"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [admissionData, setAdmissionData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchAdmissions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/cohorts/get-all-admissions"
        );

        setAdmissionData(response.data);
        console.log(response.data);
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status == 400) {
          setMessage("Cannot fetch data");
        } else {
          setMessage("Server error");
        }
      }
    };
    fetchAdmissions();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/team/team-details"
        );

        setTeamData(response.data);
        console.log(response.data);
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status == 400) {
          setMessage("Cannot fetch data");
        } else {
          setMessage("Server error");
        }
      }
    };
    fetchTeamData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/events/event-details"
        );

        setEventData(response.data);
        console.log(response.data);
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status == 400) {
          setMessage("Cannot fetch data");
        } else {
          setMessage("Server error");
        }
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const filteredAdmission = admissionData.filter(
      (res) =>
        res.academicQual.toLowerCase().includes(search.toLowerCase()) ||
        res.course.toLowerCase().includes(search.toLowerCase()) ||
        res.firstName.toLowerCase().includes(search.toLowerCase()) ||
        res.classType.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredAdmission);
  }, [admissionData, search]);

  useEffect(() => {
    const filteredEvents = eventData.filter(
      (res) =>
        res.eventName.toLowerCase().includes(search.toLowerCase()) ||
        res.eventVenue.toLowerCase().includes(search.toLowerCase()) ||
        res.eventCategory.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredEvents);
  }, [eventData, search]);


  useEffect(() => {
    const filteredTeamData = teamData.filter(
      (res) =>
        res.name.toLowerCase().includes(search.toLowerCase()) ||
        res.email.toLowerCase().includes(search.toLowerCase())
        
    );
    setSearchResults(filteredTeamData);
  }, [teamData, search]);

  return (
    <div>
      <h1>Admin dashboard</h1>
    </div>
  );
};

export default AdminDashboard;
