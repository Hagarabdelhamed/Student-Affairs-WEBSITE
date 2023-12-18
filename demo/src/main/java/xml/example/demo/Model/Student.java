package xml.example.demo.Model;

public class Student {
    private String ID;
    private String FirstName;
    private String LastName;
    private String Gender;
    private double GPA;
    private String Level;
    private String Address;
    
    public Student(String ID, String FirstName, String LastName, String Gender, double GPA, String Level, String Address){
        this.ID = ID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Gender = Gender;
        this.GPA = GPA;
        this.Level = Level;
        this.Address = Address;
    }
    public String getID(){ return ID;}
    public String getFirstName(){ return FirstName;}
    public String getLastName(){ return LastName;}
    public String getGender(){ return Gender;}
    public double getGPA(){ return GPA;}
    public String getLevel(){ return Level;}
    public String getAddress(){ return Address;}

}





