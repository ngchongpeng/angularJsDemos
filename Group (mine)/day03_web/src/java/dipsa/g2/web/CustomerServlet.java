package dipsa.g2.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.ws.rs.core.MediaType;

@WebServlet(urlPatterns = "/customer")
public class CustomerServlet extends HttpServlet {

	@Resource(lookup = "jdbc/derby_sample")
	private DataSource ds;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {

		JsonArrayBuilder custBuilder = Json.createArrayBuilder();

		try (Connection conn = ds.getConnection()) {
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("select * from CUSTOMER");
			while (rs.next()) {
				JsonObjectBuilder elem = Json.createObjectBuilder();
				elem.add("customerId", rs.getInt("CUSTOMER_ID"))
						.add("name", rs.getString("NAME"));
				custBuilder.add(elem.build());
			}
			rs.close();
			conn.close();
		} catch (SQLException ex) {
			log(ex.getMessage());
			ex.printStackTrace();
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return;
		}

		//status code
		resp.setStatus(HttpServletResponse.SC_OK);

		//media type
		resp.setContentType(MediaType.APPLICATION_JSON);

		JsonArray customers = custBuilder.build();

		try (PrintWriter pw = resp.getWriter()) {
			pw.println(customers.toString());
		}
	}
	
}
