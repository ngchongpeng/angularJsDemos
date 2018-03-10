package dipsa.g2.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonObject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.ws.rs.core.MediaType;

@WebServlet(urlPatterns = "/details/*")
public class DetailsServlet extends HttpServlet {

	private static final String SQL = "select * from CUSTOMER where CUSTOMER_ID = ?";
			
	@Resource(lookup = "jdbc/derby_sample")
	private DataSource ds;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {

		// /detail/12 -> '/12' -> '12' -> 12
		Integer custId = Integer.parseInt(req.getPathInfo().substring(1));

		try (Connection conn = ds.getConnection()) {
	
			PreparedStatement ps = conn.prepareStatement(SQL);
			ps.setInt(1, custId);

			ResultSet rs = ps.executeQuery();
			if (!rs.next()) {
				resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
				return;
			}

			//Build response
			JsonObject customer = Json.createObjectBuilder()
					.add("customerId", rs.getInt("CUSTOMER_ID"))
					.add("name", rs.getString("NAME"))
					.add("address", rs.getString("ADDRESSLINE1"))
					.add("city", rs.getString("CITY"))
					.add("phone", rs.getString("PHONE"))
					.add("email", rs.getString("EMAIL"))
					.build();

			resp.setStatus(HttpServletResponse.SC_OK);
			resp.setContentType(MediaType.APPLICATION_JSON);

			try (PrintWriter pw = resp.getWriter()) {
				pw.println(customer.toString());
			}


		} catch (SQLException ex) {
			log(ex.getMessage());
			ex.printStackTrace();
			resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			return;
		}
	}
	
	
}
