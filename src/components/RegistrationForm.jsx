import { useFormik } from "formik";
import React, { useState, useEffect } from "react";

const studentsArr = [];

const RegistrationForm = () => {
  let [students, setStudents] = useState([]);

  useEffect(() => {
    console.log(students)
    document.title = `${students.length} Successfully added`;
  }, [students]);

  const courses = [
    "Computer Science",
    "Information Technology",
    "CyberSecurity",
    "Data Science",
    "Networking",
  ];

  const id = 0;
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      DateOfBirth: "",
      course: "",
      studentId: "",
    },
    onSubmit: (values) => {
      alert(`${values.fullName} has been added successfully`);
      // document.title = `${studentsArr.length} Successfully added`;
      studentsArr.push(values);
      setStudents((prevStudents) => [...prevStudents, values]);
      //console.log(students)
     

      // console.log(studentsArr);
    },
  });

  return (
    <div className="form-container">
      <form className="formik" onSubmit={formik.handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          id="DateOfBirth"
          name="DateOfBirth"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.DateOfBirth}
          required
        />

        <label htmlFor="course">Course</label>

        <select
          id="course"
          name="course"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.course}
          required
        >
          <option value="">Select course</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
