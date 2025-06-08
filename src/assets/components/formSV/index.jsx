import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  deleteStudent,
  updateStudent,
} from "../../../redux/slice/student.slice";
import { useState } from "react";

export default function FormSV() {
  const [isUpdate, setIsUpdate] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentSlice);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name"); // 'id', 'name', or 'email'

  const onSubmit = (data) => {
    // Tạo ID mới tự động (có thể cải thiện sau)
    const newStudent = {
      id: data.id,
      name: data.name,
      phone: data.phone,
      email: data.email,
    };

    isUpdate ? dispatch(updateStudent(data)) : dispatch(addStudent(newStudent));
    reset(); // reset form
  };

  const handleUpdateStudent = (studentID) => {
    const svCanTim = students.students.find((item) => item.id === studentID);
    if (svCanTim) {
      // Sử dụng setValue để cập nhật giá trị form
      setValue("id", svCanTim.id);
      setValue("name", svCanTim.name);
      setValue("phone", svCanTim.phone);
      setValue("email", svCanTim.email);
      setIsUpdate(true);
    }
    setIsUpdate(!isUpdate);
  };

  const handleDeleteStudent = (studentID) => {
    if (window.confirm("Bạn có chắc muốn xóa sinh viên này?")) {
      dispatch(deleteStudent(studentID));
    }
  };

  const handleSearch = () => {
    if (!searchTerm) return students.students;

    return students.students.filter((student) => {
      const searchValue = searchTerm.toLowerCase();
      switch (searchType) {
        case "id":
          return student.id.toLowerCase().includes(searchValue);
        case "name":
          return student.name.toLowerCase().includes(searchValue);
        case "email":
          return student.email.toLowerCase().includes(searchValue);
        default:
          return true;
      }
    });
  };

  const filteredStudents = handleSearch();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <div className="btn-search flex items-center gap-4 mb-4">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="name">Tìm theo tên</option>
          <option value="id">Tìm theo mã SV</option>
          <option value="email">Tìm theo email</option>
        </select>

        <input
          type="text"
          placeholder={`Tìm kiếm theo ${
            searchType === "id"
              ? "mã SV"
              : searchType === "name"
              ? "tên"
              : "email"
          }...`}
          className="w-[50%] border rounded px-3 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h2 className="text-xl font-semibold bg-gray-800 text-white px-4 py-2 rounded-t">
        Thông tin sinh viên
      </h2>

      <form
        className="p-4 grid grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="block mb-1 font-medium">Mã SV</label>
          <input
            id="maSV"
            disabled={isUpdate}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            {...register("id", { required: true })}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Họ tên</label>
          <input
            id="hoTenSV"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            {...register("name", { required: true })}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Số điện thoại</label>
          <input
            id="phoneSV"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            {...register("phone", { required: true })}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            id="emailSV"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            {...register("email", { required: true })}
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {isUpdate ? "Sửa sinh viên" : "Thêm sinh viên"}
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
            <th className="border px-4 py-2">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((item) => (
            <tr key={item.id}>
              <th className="border px-4 py-2">{item.id}</th>
              <th className="border px-4 py-2">{item.name}</th>
              <th className="border px-4 py-2">{item.phone}</th>
              <th className="border px-4 py-2">{item.email}</th>
              <th className="border py-2">
                <button
                  type="button"
                  className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                  onClick={() => {
                    handleUpdateStudent(item.id);
                  }}
                >
                  Sửa
                </button>

                <button
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => handleDeleteStudent(item.id)}
                >
                  Xoá
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
