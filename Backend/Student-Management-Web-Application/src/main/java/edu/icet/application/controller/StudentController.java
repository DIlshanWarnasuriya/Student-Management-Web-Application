package edu.icet.application.controller;

import edu.icet.application.dto.Student;
import edu.icet.application.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequiredArgsConstructor
public class StudentController {

    final StudentService service;

    @PostMapping("/student")
    Student saveStudent(@RequestBody Student student){
        return service.saveStudent(student);
    }

    @GetMapping("/student")
    List<Student> getAllStudent(){
        return service.getAllStudent();
    }

    //Delete method
    @DeleteMapping("/student")
    void deleteStudent(@RequestParam(name = "id") Integer id){
        service.deleteStudent(id);
    }

    //Update methods
    @GetMapping("/student-by-id/{id}")
    Student getStudentsByFirstName(@PathVariable Integer id){
        return service.getStudentsById(id);
    }

    @PatchMapping("/student")
    void updateStudent(@RequestBody Student student){
        service.updateStudent(student);
    }

    //Search methods
    @GetMapping("/student-by-firstName/{firstName}")
    List<Student> getStudentsByFirstName(@PathVariable String firstName){
        return service.getStudentsByFirstName(firstName);
    }

    @GetMapping("/student-by-lastName/{lastName}")
    List<Student> getStudentsByLastName(@PathVariable String lastName){
        return service.getStudentsByLastName(lastName);
    }

    @GetMapping("/student-by-age/{age}")
    List<Student> getStudentsByLastName(@PathVariable Integer age){
        return service.getStudentsByAge(age);
    }

    @GetMapping("/student-by-province/{province}")
    List<Student> getStudentsByProvince(@PathVariable String province){
        return service.getStudentsByProvince(province);
    }
}
