package xml.example.demo.Controller;

import java.io.File;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import javax.sound.midi.ShortMessage;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;

import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import ch.qos.logback.core.pattern.parser.Node;
import xml.example.demo.Model.Student;

public class XMLController {

    private static Document doc;
    private static DocumentBuilderFactory factory;
    private static DocumentBuilder builder;
    private static String fileName;

    public XMLController(String fileName) throws Exception {

        XMLController.fileName = fileName;
        factory = DocumentBuilderFactory.newInstance();
        builder = factory.newDocumentBuilder();
        File xmlFile = new File(fileName);
        if (xmlFile.exists()) {
            doc = builder.parse(xmlFile);

        } else
            buildXML();
    }

    public void writeXMLtoFile() throws Exception {
        TransformerFactory transformerFactory = TransformerFactory.newInstance();
        Transformer transformer = transformerFactory.newTransformer();

        transformer.setOutputProperty(OutputKeys.INDENT, "yes");
        transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");

        DOMSource source = new DOMSource(doc);
        StreamResult result = new StreamResult(new File(fileName));
        transformer.transform(source, result);
    }

    public void buildXML() throws Exception {
        doc = builder.newDocument();
        Element root = doc.createElement("University");
        doc.appendChild(root);
        writeXMLtoFile();
    }
    public void addStudent(Student student) throws Exception {
        // Validate constraints
        if (!isValidName(student.getFirstName()) || !isValidName(student.getLastName())) {
            throw new IllegalArgumentException("Invalid name. Name must contain only characters (a-z).");
        }
    
        if (!isValidAddress(student.getAddress())) {
            throw new IllegalArgumentException("Invalid address. Address must contain only characters (a-z).");
        }
    
        if (!isValidGPA(student.getGPA())) {
            throw new IllegalArgumentException("Invalid GPA. GPA must be between 0 and 4.");
        }
    
        // Create XML elements
        Element root = doc.getDocumentElement();
        Element studentElements = doc.createElement("Student");
        Element firstNameElement = doc.createElement("FirstName");
        Element lastNameElement = doc.createElement("LastName");
        Element genderElement = doc.createElement("Gender");
        Element gpaElement = doc.createElement("GPA");
        Element levelElement = doc.createElement("Level");
        Element addressElement = doc.createElement("Address");
    
        // Set element attributes and text content
        studentElements.setAttribute("ID", student.getID());
        firstNameElement.setTextContent(student.getFirstName());
        lastNameElement.setTextContent(student.getLastName());
        genderElement.setTextContent(student.getGender());
        gpaElement.setTextContent(String.valueOf(student.getGPA()));
        levelElement.setTextContent(student.getLevel());
        addressElement.setTextContent(student.getAddress());
    
        // Append child elements to student element and root element
        studentElements.appendChild(firstNameElement);
        studentElements.appendChild(lastNameElement);
        studentElements.appendChild(genderElement);
        studentElements.appendChild(gpaElement);
        studentElements.appendChild(levelElement);
        studentElements.appendChild(addressElement);
        root.appendChild(studentElements);
    
        // Write updated XML file
        writeXMLtoFile();
    }
    
    // Helper methods for validation
    private boolean isValidName(String name) {
        return name.matches("^[a-zA-Z]+$");
    }
    
    private boolean isValidAddress(String address) {
        return address.matches("^[a-zA-Z]+$");
    }
    
    private boolean isValidGPA(double gpa) {
        return gpa >= 0 && gpa <= 4;
    }


    public List<Student> readStudentsFromXML() throws Exception {

        // Get the root element and retrieve all student elements
        Element root = doc.getDocumentElement();
        NodeList studentElements = root.getElementsByTagName("Student");

        // Initialize an empty list to store students
        List<Student> students = new ArrayList<>();

        // Iterate over each student element
        for (int i = 0; i < studentElements.getLength(); i++) {
            Element studentElement = (Element) studentElements.item(i);

            // Extract student attributes and child element values
            String ID = studentElement.getAttribute("ID");
            String FirstName = studentElement.getElementsByTagName("FirstName").item(0).getTextContent();
            String LastName = studentElement.getElementsByTagName("LastName").item(0).getTextContent();
            String Gender = studentElement.getElementsByTagName("Gender").item(0).getTextContent();
            double GPA = Double.parseDouble(studentElement.getElementsByTagName("GPA").item(0).getTextContent());
            String Level = studentElement.getElementsByTagName("Level").item(0).getTextContent();
            String Address = studentElement.getElementsByTagName("Address").item(0).getTextContent();

            // Create a new student object and add it to the list
            Student student = new Student(ID, FirstName, LastName, Gender, GPA, Level, Address);
            students.add(student);
        }

        // Return the list of student objects
        return students;
    }

    public List<Student> findByFirstName(String name) throws Exception {

        List<Student> students = readStudentsFromXML();
        List<Student> sameNames = new ArrayList<>();
        for (Student s : students) {
            if (s.getFirstName().equals(name))
                sameNames.add(s);
        }
        return sameNames;
    }



    public List<Student> findByLastName(String name) throws Exception {

        List<Student> students = readStudentsFromXML();
        List<Student> sameNames = new ArrayList<>();
        for (Student s : students) {
            if (s.getLastName().equals(name))
                sameNames.add(s);
        }
        return sameNames;
    }



 public List<Student> findByLevel(String name) throws Exception {

        List<Student> students = readStudentsFromXML();
        List<Student> sameLevel = new ArrayList<>();
        for (Student s : students) {
            if (s.getLevel().equals(name))
                sameLevel.add(s);
        }
        return sameLevel;
    }


 public List<Student> findByGender(String name) throws Exception {

        List<Student> students = readStudentsFromXML();
        List<Student> sameGender = new ArrayList<>();
        for (Student s : students) {
            if (s.getGender().equals(name))
                sameGender.add(s);
        }
        return sameGender;
    }


 public List<Student> findByAddress(String name) throws Exception {

        List<Student> students = readStudentsFromXML();
        List<Student> sameAddress = new ArrayList<>();
        for (Student s : students) {
            if (s.getAddress().equals(name))
                sameAddress.add(s);
        }
        return sameAddress;
    }


 public List<Student> findByID(String name) throws Exception {

        List<Student> students = readStudentsFromXML();
        List<Student> sameID = new ArrayList<>();
        for (Student s : students) {
            if (s.getID().equals(name))
                sameID.add(s);
        }
        return sameID;
    }



    public List<Student> findByGPA(double gpa) throws Exception {

        List<Student> students = readStudentsFromXML();
        List<Student> sameGPAs = new ArrayList<>();
        for (Student s : students) {
            if (Math.abs(s.getGPA() - gpa) < 0.001)
                sameGPAs.add(s);
        }
        return sameGPAs;
    }

    public boolean checkStudentExistByID(String id) {

        Element root = doc.getDocumentElement();
        NodeList studentElements = root.getElementsByTagName("Student");

        for (int i = 0; i < studentElements.getLength(); i++) {

            Element student = (Element) studentElements.item(i);
            String studentId = student.getAttribute("ID");

            if (id.equals(studentId)) {
                return true;
            }
        }
        return false;
    }

    public String deleteStudentByID(String id) throws Exception {

        if (!checkStudentExistByID(id)) {
            return "Student with ID " + id + " does not exist.";

        }

        Element root = doc.getDocumentElement();
        NodeList studentElements = root.getElementsByTagName("Student");

        for (int i = 0; i < studentElements.getLength(); i++) {

            Element student = (Element) studentElements.item(i);
            String studentId = student.getAttribute("ID");

            if (id.equals(studentId)) {
                org.w3c.dom.Node parentNode = student.getParentNode();
                parentNode.removeChild(student);
                writeXMLtoFile();
                return "Student with ID " + id + " has been deleted.";

            }
        }

        // Write updated XML file
        writeXMLtoFile();
        return "Student with ID " + id + " does not exist.";

    }




public List<Student> sort(String sortedBy, String order) throws Exception {
        List<Student> students = readStudentsFromXML();
    
        Comparator<Student> comparator = getComparator(sortedBy);
    
        students.sort(order.equals("descending") ? comparator.reversed() : comparator);
    
        updateXML(students);
    
        return students;
    }
    
    private Comparator<Student> getComparator(String sortedBy) {
        switch (sortedBy) {
            case "firstname":
                return Comparator.comparing(Student::getFirstName, String.CASE_INSENSITIVE_ORDER);
            case "lastname":
                return Comparator.comparing(Student::getLastName, String.CASE_INSENSITIVE_ORDER);
            case "studentid":
                return Comparator.comparing(Student::getID, String.CASE_INSENSITIVE_ORDER);
            case "gender":
                return Comparator.comparing(Student::getGender, String.CASE_INSENSITIVE_ORDER);
            case "gpa":
            return Comparator.comparingDouble(Student::getGPA);
            case "level":
                return Comparator.comparing(Student::getLevel, String.CASE_INSENSITIVE_ORDER);
            case "address":
                return Comparator.comparing(Student::getAddress, String.CASE_INSENSITIVE_ORDER);
            default:
                throw new IllegalArgumentException("Invalid attribute for sorting: " + sortedBy);
        }
    }
    
    private void clearStudentElements() {
        Element root = doc.getDocumentElement();
        NodeList studentElements = root.getElementsByTagName("Student");
    
        for (int i = studentElements.getLength() - 1; i >= 0; i--) {
            org.w3c.dom.Node studentNode = studentElements.item(i);
            studentNode.getParentNode().removeChild(studentNode);
        }
    }
    
    private void updateXML(List<Student> students) throws Exception {
        clearStudentElements();
    
        for (Student student : students) {
            addStudent(student);
        }
    }
}