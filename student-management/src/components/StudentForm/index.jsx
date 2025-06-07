import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../../redux/actions/studentActions";

const StudentForm = ({ studentToEdit, setStudentToEdit }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (studentToEdit) {
      setForm(studentToEdit);
    }
  }, [studentToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentToEdit) {
      dispatch(updateStudent(form));
    } else {
      dispatch(addStudent(form));
    }
    setForm({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
    setStudentToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 grid grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 font-medium">Mã SV</label>
        <input
          type="text"
          name="id"
          value={form.id}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Họ tên</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Số điện thoại</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          {studentToEdit ? "Cập nhật sinh viên" : "Thêm sinh viên"}
        </button>
      </div>
    </form>
  );
};

export default StudentForm;