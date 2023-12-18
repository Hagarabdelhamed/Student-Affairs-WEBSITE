package xml.example.demo.Views;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudViews {

    @GetMapping("/add")
    public String showIndexPage() {
        return "index";
    }

    @GetMapping("/delete")
    public String showDeletePage() {
        return "records";
    }

    @GetMapping("/search")
    public String showSearchPage() {
        return "search";
    }

    @GetMapping("/searchgpa")
    public String showSearchPagegpa() {
        return "searchgpa";
    }

    @GetMapping("/form")
    public String showForm() {
        return "student_form";
    }
    @GetMapping("/edit")
    public String edit() {
        return "edit";
    }
    @GetMapping("/")
    public String showdata() {
        return "allData";
    }
}
