package edu.icet.application.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Student {
    private Integer id;
    private String firstName;
    private String lastName;
    private String province;
    private Integer age;
}
