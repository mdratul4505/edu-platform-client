"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("https://edu-server-api.vercel.app/courses");
        const data = await res.json();
        setCourses(data.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Popular Courses
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          Join thousands of students learning these trending courses
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) =>
          course._id ? (
            <div
              key={course._id}
              className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="h-48 bg-black flex items-center justify-center">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      course.image || "/placeholder.jpg"
                    })`,
                  }}
                ></div>
              </div>

              <div className="p-6">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-600 text-white">
                  {course.category || "Development"}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {course.title}
                </h3>
                <p className="mt-1 text-gray-400 text-sm">
                  {course.instructor || "Unknown Instructor"}
                </p>
                <p className="mt-4 text-3xl font-bold text-cyan-400">
                  ${course.price || "0"}
                </p>
                <Link href={`/courses/${course._id}`}>
                  <button className="mt-6 w-full py-3 px-4 border rounded-lg text-white bg-cyan-500 hover:bg-cyan-600 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
