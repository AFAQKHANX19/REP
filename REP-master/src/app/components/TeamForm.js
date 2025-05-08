'use client';
import React, { useState } from "react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Field from "./Form";
import { userService } from "../Services/api";
import { toast } from 'react-hot-toast';

const TeamForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      images: [],
      designation: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      designation: Yup.string().required("Designation is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      setError(null);
      setSuccess(null);
      
      try {
        await userService.createUser(values);
        setSuccess("Team member added successfully!");
        formik.resetForm();
      } catch (err) {
        setError(err.message || "Failed to add team member");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleFileChange = (event) => {
    const files = Array.from(event.currentTarget.files);
    formik.setFieldValue("images", files);
  };

  return (
    <>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className="border border-gray-300 rounded-[4px] bg-white px-6 py-7"
        >
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {success}
            </div>
          )}

          <main className="flex flex-col gap-3">
            {/* Title Description */}
            <Field type="text" name="title" label="Title" />
            <Field type="text" name="designation" label="Designation" />
            <Field type="textarea" name="description" label="Description" />

            {/* Upload Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Team Member Image
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-green-50 file:text-green-700
                  hover:file:bg-green-100"
              />
              {formik.values.images.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {formik.values.images.length} file(s) selected
                  </p>
                </div>
              )}
            </div>
          </main>

          {/* submit btn */}
          <hr className="mt-4 mb-2" />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`mt-4 py-2 px-5 bg-green-500 text-white rounded-[4px] ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </FormikProvider>
    </>
  );
};

export default TeamForm;