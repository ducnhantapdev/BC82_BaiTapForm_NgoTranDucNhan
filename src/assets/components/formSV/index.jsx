import React, { useState } from "react";

export default function FormSV() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id && form.name && form.phone && form.email) {
      setStudents([...students, form]);
      setForm({
        id: "",
        name: "",
        phone: "",
        email: "",
      });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };
  return (
    <>
      <h1>
        Cho mình xin thêm 1 ngày để hoàn thiện bài tập nhé. Mình xin cảm ơn ^^
      </h1>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <input type="text" placeholder="Tìm kiếm...." className="mb-2" />
        <h2 className="text-xl font-semibold bg-gray-800 text-white px-4 py-2 rounded-t">
          Thông tin sinh viên
        </h2>
        <form onSubmit={handleSubmit} className="p-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Mã SV</label>
            <input
              type="text"
              name="id"
              value={form.id}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
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
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Thêm sinh viên
            </button>
          </div>
        </form>

        <table className="w-full mt-6 border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="border px-4 py-2">Mã SV</th>
              <th className="border px-4 py-2">Họ tên</th>
              <th className="border px-4 py-2">Số điện thoại</th>
              <th className="border px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{student.id}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.phone}</td>
                <td className="border px-4 py-2">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
