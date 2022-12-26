package mk.ukim.finki.wpaud.web.servlet;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mk.ukim.finki.wpaud.service.CategoryService;

import java.io.IOException;
import java.io.PrintWriter;


@WebServlet(name = "category-servlet", urlPatterns = "/servlet/category")
public class CategoryServlet extends HttpServlet {

    private final CategoryService categoryService;
    public CategoryServlet(CategoryService categoryService){
        this.categoryService = categoryService;
    }


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException, IOException {
        String ipAddr = req.getRemoteAddr();
        String clientAgent = req.getHeader("User-Agent");
        PrintWriter out = resp.getWriter();
        out.println("<html>");
        out.println("<head>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h3>User Info</h3>");
        out.format("IP address: %s", ipAddr);
        out.format("<br>Client Agent: %s", clientAgent);
        out.println("<h3>Category List</h3>");
        out.println("<ul>");
        categoryService.listCategories().stream().forEach(r -> out.format("<li>%s (%s)</li>", r.getName(), r.getDescription()));
        out.println("</ul>");
        out.println("<h3>Add Category</h3>");
        out.println("<form method='POST' action='/servlet/category'>\n" +
                "\t<label for='name'>Name:</label><br>\n" +
                "\t<input id='name' type='text' name='name'/><br><br>\n" +
                "\t<label for='description'>Description:</label><br>\n" +
                "\t<input id='description' type='text' name='description'/><br><br>\n" +
                "\t<input type='submit' value='Submit'/>\n" +
                "</form>");
        out.println("</body>");
        out.println("</html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String categoryName = req.getParameter("name");
        String descriptionName = req.getParameter("description");
        categoryService.create(categoryName,descriptionName);
        resp.sendRedirect("/servlet/category");
    }

}
