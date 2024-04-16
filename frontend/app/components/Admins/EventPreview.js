"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const EventPreview = () => {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    setIsLoading(true);
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/events/get-all-events"
        );

        setEventData(response.data);
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
    const filteredEvents = eventData.filter(
      (res) =>
        res.eventName.toLowerCase().includes(search.toLowerCase()) ||
        res.eventVenue.toLowerCase().includes(search.toLowerCase()) ||
        res.eventCategory.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredEvents);
  }, [eventData, search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="flex mb-4">
        <div className="flex space-x-4">
          <Link
            href="/admin-dashboard"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Admission List
          </Link>
          <Link
            href="/team-list"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Team List
          </Link>
          <Link
            href="/event-list"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Event List
          </Link>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-[#FFF8ED]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!isLoading && eventData.length === 0 ? (
        <p>No event found...</p>
      ) : (
        <>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">S/N</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Venue</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((event, index) => {
                const {
                  _id,
                  image,
                  eventName,
                  eventCategory,
                  startDate,
                  duration,
                  eventVenue,
                } = event;

                return (
                  <tr key={_id}>
                    <td className="border px-4 py-2">{index + 1}</td>

                    <td className="border px-4 py-2">{eventName}</td>
                    <td className="border px-4 py-2">{eventCategory}</td>

                    <td className="border px-4 py-2">{startDate}</td>
                    <td className="border px-4 py-2">{duration}</td>
                    <td className="border px-4 py-2">{eventVenue}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="my-[12px] w-[100%] flex items-center justify-center">
            <Link
              href="/event-creation"
              className="w-[353px] bg-[#FC7C13] p-[10px] rounded my-[5px] flex items-center justify-center text-[16px] font-poppins text-[#fff] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-10"
            >
              Add Event
            </Link>
          </div>
          <div className="mt-4">
            <ul className="flex">
              {[
                ...Array(Math.ceil(searchResults.length / itemsPerPage)).keys(),
              ].map((number) => (
                <li key={number} className="mr-2">
                  <button
                    onClick={() => paginate(number + 1)}
                    className="px-3 py-1 rounded-md bg-blue-500 text-white"
                  >
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default EventPreview;
