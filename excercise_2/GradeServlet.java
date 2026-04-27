import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class GradeServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Get mark
        int marks = Integer.parseInt(request.getParameter("marks"));

        String grade;

        if (marks >= 90) {
            grade = "O";
        } else if (marks >= 85) {
            grade = "A+";
        } else if (marks >= 80) {
            grade = "A";
        } else if (marks >= 75) {
            grade = "B+";
        }else if (marks >= 70) {
            grade = "B";
        }else if (marks >= 65) {
            grade = "C+";
        }else if (marks >= 45) {
            grade = "C";
        } else {
            grade = "Fail";
        }

        // Output
        out.println("<html><body>");
        out.println("<h2>Result</h2>");
        if (marks<0 || marks>100){
            out.println("please try with valid marks");
        }else{
            out.println("<p>Marks: " + marks + "</p>");
            out.println("<h3>Grade: " + grade + "</h3>");
        }
        out.println("<footer style='position: fixed; bottom: 0; width: 100%; text-align: center; background-color: #f1f1f1; padding: 10px;'>");
        out.println("<p>&copy; 2026 Grade Calculator 24071A05F1. All rights reserved.</p>");
        out.println("</footer>");
        out.println("</body></html>");
    }
}
