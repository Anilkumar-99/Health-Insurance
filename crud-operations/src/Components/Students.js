import React, { useState, useEffect } from 'react';

function StudentData() {
  const [students, setStudents] = useState(() => {
    const storedStudents = localStorage.getItem('students');
    return storedStudents ? JSON.parse(storedStudents) : [
      { id: 1, name: 'Anil', grade: 'A', course: 'javascript' },
      { id: 2, name: 'Harsha', grade: 'A', course: 'react' },
      { id: 3, name: 'Kumar', grade: 'A', course: 'phyton' }
    ];
  });
  
  const [editingId, setEditingId] = useState(null);
  const [tempName, setTempName] = useState('');
  const [tempGrade, setTempGrade] = useState('');
  const [tempCourse, setTempCourse] = useState('');

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleEdit = (id, name, grade, course) => {
    setEditingId(id);
    setTempName(name);
    setTempGrade(grade);
    setTempCourse(course);
  };

  const handleSave = (id) => {
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, name: tempName, grade: tempGrade, course: tempCourse } : student
    );
    setStudents(updatedStudents);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleAddCourse = (id) => {
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, course: tempCourse } : student
    );
    setStudents(updatedStudents);
    setTempCourse('');
  };

  return (
    <div>
      <h2>Student Data</h2>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>
                {editingId === student.id ? (
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                  />
                ) : (
                  student.name
                )}
              </td>
              <td>
                {editingId === student.id ? (
                  <input
                    type="text"
                    value={tempGrade}
                    onChange={(e) => setTempGrade(e.target.value)}
                  />
                ) : (
                  student.grade
                )}
              </td>
              <td>
                {editingId === student.id ? (
                  <input
                    type="text"
                    value={tempCourse}
                    onChange={(e) => setTempCourse(e.target.value)}
                  />
                ) : (
                  student.course
                )}
                {editingId === student.id && (
                  <button onClick={() => handleAddCourse(student.id)}>Add Course</button>
                )}
              </td>
              <td>
                {editingId !== student.id ? (
                  <>
                    <button className="btn btn-primary" onClick={() => handleEdit(student.id, student.name, student.grade, student.course)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-success" onClick={() => handleSave(student.id)}>Save</button>
                    <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentData;