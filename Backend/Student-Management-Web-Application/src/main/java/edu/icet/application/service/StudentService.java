package edu.icet.application.service;

import edu.icet.application.dto.Student;
import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);
    List<Student> getAllStudent();

    void deleteStudent(Integer id);

    Student getStudentsById(Integer id);
    void updateStudent(Student student);

    List<Student> getStudentsByProvince(String province);
    List<Student> getStudentsByFirstName(String firstName);
    List<Student> getStudentsByLastName(String lastName);
    List<Student> getStudentsByAge(int age);

}
