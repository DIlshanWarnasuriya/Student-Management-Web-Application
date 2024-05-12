package edu.icet.application.service;

import com.fasterxml.jackson.databind.ObjectMapper;

import edu.icet.application.dto.Student;
import edu.icet.application.entity.StudentEntity;
import edu.icet.application.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService{

    final StudentRepository repository;
    final ObjectMapper mapper;

    @Override
    public Student saveStudent(Student student) {
        StudentEntity entity = mapper.convertValue(student, StudentEntity.class);
        StudentEntity save = repository.save(entity);
        return mapper.convertValue(save, Student.class);
    }

    @Override
    public List<Student> getAllStudent() {
        Iterable<StudentEntity> all = repository.findAll();

        List<Student> studentList = new ArrayList<>();
        for (StudentEntity entity : all){
            studentList.add(mapper.convertValue(entity, Student.class));
        }
        return studentList;
    }

    // Delete method -----------------------
    @Override
    public void deleteStudent(Integer id) {
        repository.deleteById(id);
        Collections.singletonMap("data", "Delete Successful");
    }

    // Update methods ----------------------
    @Override
    public Student getStudentsById(Integer id) {
        Optional<StudentEntity> byId = repository.findById(id);
        return mapper.convertValue(byId, Student.class);
    }

    @Override
    public void updateStudent(Student student) {
        StudentEntity entity = mapper.convertValue(student, StudentEntity.class);
        repository.save(entity);
    }

    // Search Methods ----------------------
    @Override
    public List<Student> getStudentsByFirstName(String firstName) {
        Iterable<StudentEntity> allByProvince = repository.findAllByFirstName(firstName);

        List<Student> studentList = new ArrayList<>();
        for (StudentEntity entity : allByProvince){
            studentList.add(mapper.convertValue(entity, Student.class));
        }
        return studentList;
    }

    @Override
    public List<Student> getStudentsByLastName(String lastName) {
        Iterable<StudentEntity> allByProvince = repository.findAllByLastName(lastName);

        List<Student> studentList = new ArrayList<>();
        for (StudentEntity entity : allByProvince){
            studentList.add(mapper.convertValue(entity, Student.class));
        }
        return studentList;
    }

    @Override
    public List<Student> getStudentsByAge(int age) {
        Iterable<StudentEntity> allByProvince = repository.findAllByAge(age);

        List<Student> studentList = new ArrayList<>();
        for (StudentEntity entity : allByProvince){
            studentList.add(mapper.convertValue(entity, Student.class));
        }
        return studentList;
    }

    @Override
    public List<Student> getStudentsByProvince(String province) {
        Iterable<StudentEntity> allByProvince = repository.findAllByProvince(province);

        List<Student> studentList = new ArrayList<>();
        for (StudentEntity entity : allByProvince){
            studentList.add(mapper.convertValue(entity, Student.class));
        }
        return studentList;
    }
}
