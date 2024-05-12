package edu.icet.application.repository;


import edu.icet.application.entity.StudentEntity;
import org.springframework.data.repository.CrudRepository;


public interface StudentRepository extends CrudRepository<StudentEntity, Integer> {
    Iterable<StudentEntity> findAllByProvince(String province);

    Iterable<StudentEntity> findAllByFirstName(String firstName);

    Iterable<StudentEntity> findAllByLastName(String lastName);

    Iterable<StudentEntity> findAllByAge(int age);

}
