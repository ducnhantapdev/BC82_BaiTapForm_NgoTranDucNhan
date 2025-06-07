// filepath: student-management/src/redux/actions/studentActions.js

import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, FETCH_STUDENTS } from '../../types';

export const addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student,
    };
};

export const updateStudent = (student) => {
    return {
        type: UPDATE_STUDENT,
        payload: student,
    };
};

export const deleteStudent = (id) => {
    return {
        type: DELETE_STUDENT,
        payload: id,
    };
};

export const fetchStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students,
    };
};