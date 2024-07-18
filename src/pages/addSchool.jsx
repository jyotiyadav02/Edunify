import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const AddSchool = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [contact, setContact] = useState('');
  const [email_id, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('contact', contact);
    formData.append('email_id', email_id);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/addSchool', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      setLoading(false);
      router.push('/showSchools'); // Redirect to showSchools page after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      setLoading(false);
      setError('Failed to submit form. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 md:p-8 space-y-4 border-black">
          <h2 className="text-3xl font-bold text-center mb-4">Add New School</h2>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                School Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter school name"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="address" className="text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter school address"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="city" className="text-sm font-medium">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter city"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="state" className="text-sm font-medium">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter state"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="contact" className="text-sm font-medium">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter contact number"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email_id}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="image" className="text-sm font-medium">
                School Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      </>
  );
};

export default AddSchool;
