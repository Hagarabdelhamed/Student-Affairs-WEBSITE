package xml.example.demo.Controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.ParserConfigurationException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.xml.sax.SAXException;

import jakarta.servlet.http.HttpServletRequest;
import xml.example.demo.Model.Student;
import xml.example.demo.Model.sort;

@RestController
public class StudentController {
    private XMLController xml;

    public StudentController() throws Exception {
        xml = new XMLController("students.xml");
    }

    @GetMapping("/student")
    public List<Student> getAllStudents() throws ParserConfigurationException, Exception {
        List<Student> students = xml.readStudentsFromXML();
        return students;

    }

    @PostMapping("/student/create")
    public ResponseEntity<?> createStudent(@RequestBody Student stu) throws Exception {
        response resp = new response();
        if (xml.checkStudentExistByID(stu.getID())) {
            resp.res = "ID is already exists!";
            return ResponseEntity.ok(resp);
        } // Validate name (first name and last name)
        String firstName = stu.getFirstName();
        String lastName = stu.getLastName();

        if (!isValidName(firstName)) {
            resp.res = "Invalid name. First Name should contain only characters (a-z).";
            return ResponseEntity.ok(resp);
        }
        if (!isValidName(lastName)) {
            resp.res = "Invalid name. Last Name should contain only characters (a-z).";
            return ResponseEntity.ok(resp);
        }
        // Validate GPA
        double gpa = stu.getGPA();
        if (gpa < 0 || gpa > 4) {
            resp.res = "Invalid GPA. GPA must be from 0 to 4.";
            return ResponseEntity.ok(resp);
        }
        // Validate address
        String address = stu.getAddress();
        if (!isValidName(address)) {
            resp.res = "Invalid name. Address should contain only characters (a-z).";
            return ResponseEntity.ok(resp);
        } else {
            xml.addStudent(stu);
            resp.res = "Added Successfully!";
            return ResponseEntity.ok(resp);
        }
    }

    // Helper method to validate name
    private boolean isValidName(String name) {
        return name.matches("^[a-zA-Z]+$");
    }


    @PostMapping("/student/search")
    public ResponseEntity<?> searchStudents(@RequestBody Student stu) throws Exception {
        if (stu.getFirstName() != null) {
            List<Student> studentList = xml.findByFirstName(stu.getFirstName());
            return ResponseEntity.ok(studentList);

        }
        else if (stu.getLastName() != null) {
            List<Student> studentList = xml.findByLastName(stu.getLastName());
            return ResponseEntity.ok(studentList);

        }
        else if (stu.getLevel() != null) {
            List<Student> studentList = xml.findByLevel(stu.getLevel());
            return ResponseEntity.ok(studentList);

        }
        else if (stu.getGender() != null) {
            List<Student> studentList = xml.findByGender(stu.getGender());
            return ResponseEntity.ok(studentList);
        }
        else if (stu.getAddress() != null) {
            List<Student> studentList = xml.findByAddress(stu.getAddress());
            return ResponseEntity.ok(studentList);
        }
        else if (stu.getID() != null) {
            List<Student> studentList = xml.findByID(stu.getID());
            return ResponseEntity.ok(studentList);
        }
        else {
            List<Student> studentList = xml.findByGPA(stu.getGPA());
            return ResponseEntity.ok(studentList);
        }
    }

    @RequestMapping(value = "/student/delete", method = RequestMethod.POST)
    public ResponseEntity<?> DeleteStudent(@RequestBody Student stu) throws Exception {
        response resp = new response();
        resp.res = xml.deleteStudentByID(stu.getID());
        return ResponseEntity.ok(resp);
    }


    @GetMapping("/sort")
    public  ResponseEntity<?> getAllStudents(
           @RequestBody sort so )
            throws ParserConfigurationException, Exception {
        xml.sort(so.sortBy.trim().toLowerCase(),so.order.trim().toLowerCase());
        List<Student> studentList = xml.readStudentsFromXML();
            return ResponseEntity.ok(studentList);
    }

}
