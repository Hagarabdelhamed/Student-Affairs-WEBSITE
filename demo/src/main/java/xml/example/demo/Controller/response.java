package xml.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import xml.example.demo.Model.Student;

public class response {
    String res;
    List<Student> studentList = new ArrayList<>();

    public void setMsg(String message) {
        res = message;
    }

    public String getMsg() {
        return res;
    }
}
