"use client";
import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaRegStar, FaStar } from "react-icons/fa";
import { propertyService } from "../Services/api";
import { toast } from 'react-hot-toast'; // Assuming you'll use react-hot-toast for notifications

const TableListing = ({ onEdit, onAddNew }) => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setIsLoading(true);
      const data = await propertyService.getAllProperties();
      setProperties(data);
    } catch (error) {
      setError(`Error fetching properties: ${error.message || error}`);
      toast.error(`Failed to load properties: ${error.message || error}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle property deletion
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await propertyService.deleteProperty(id);
        // Remove property from state
        setProperties(properties.filter(property => property._id !== id));
        toast.success('Property deleted successfully');
      } catch (error) {
        toast.error(`Failed to delete property: ${error.message || error}`);
      }
    }
  };

  // Handle toggling featured status
  const toggleFeatured = async (property) => {
    try {
      const updatedProperty = { ...property, featured: !property.featured };
      await propertyService.updateProperty(property._id, updatedProperty);
      
      // Update state
      setProperties(properties.map(p => 
        p._id === property._id ? { ...p, featured: !p.featured } : p
      ));
      
      toast.success(`Property ${updatedProperty.featured ? 'marked' : 'unmarked'} as featured`);
    } catch (error) {
      toast.error(`Failed to update featured status: ${error.message || error}`);
    }
  };

  if (isLoading) {
    return <div className="text-center p-10">Loading properties...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md rounded-[4px] border border-gray-100">
      <div className="flex justify-between items-center p-4 bg-white">
        <h2 className="text-lg font-semibold">Property Listings</h2>
        <button 
          onClick={onAddNew}
          className="bg-green-500 text-white px-4 py-2 rounded-[4px]"
        >
          Add New Property
        </button>
      </div>
      
      {properties.length === 0 ? (
        <div className="text-center p-10">No properties found.</div>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Property ID</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">House No</th>
              <th scope="col" className="px-6 py-3">Block</th>
              <th scope="col" className="px-6 py-3">Area</th>
              <th scope="col" className="px-6 py-3">Beds</th>
              <th scope="col" className="px-6 py-3">Baths</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Featured</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property._id} className="odd:bg-white even:bg-gray-50 text-gray-900">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                  {property.propertyId}
                </th>
                <td className="px-6 py-4">{property.title}</td>
                <td className="px-6 py-4">{property.houseNumber}</td>
                <td className="px-6 py-4">{property.blockNumber}</td>
                <td className="px-6 py-4">{property.areaSize}</td>
                <td className="px-6 py-4">{property.bedrooms}</td>
                <td className="px-6 py-4">{property.bathrooms}</td>
                <td className="px-6 py-4">{property.price.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">
                  <button onClick={() => toggleFeatured(property)} className="focus:outline-none">
                    {property.featured ? (
                      <FaStar className="h-5 w-5 ml-4 text-yellow-500" />
                    ) : (
                      <FaRegStar className="h-5 w-5 ml-4 text-yellow-500" />
                    )}
                  </button>
                </td>
                <td className="px-6 py-4 flex justify-start items-center gap-2">
                  <button onClick={() => onEdit(property._id)}>
                    <LiaEditSolid className="h-5 w-5 text-blue-500 hover:cursor-pointer" />
                  </button>
                  <button onClick={() => handleDelete(property._id)}>
                    <RiDeleteBin7Line className="h-5 w-5 text-red-500 hover:cursor-pointer" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableListing;