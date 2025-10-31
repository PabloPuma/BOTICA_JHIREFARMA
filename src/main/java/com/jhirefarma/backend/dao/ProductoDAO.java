package main.java.com.jhirefarma.backend.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import main.java.com.jhirefarma.backend.model.Producto;
import main.java.com.jhirefarma.backend.util.LoggerConfig;

public class ProductoDAO {
    public List<Producto> listarProductos() {
        List<Producto> lista = new ArrayList<>();
        String sql = "SELECT * FROM productos";
        try (Connection con = ConexionBD.getConnection();
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery(sql)) {
            while (rs.next()) {
                lista.add(new Producto(
                    rs.getInt("id"),
                    rs.getString("nombre"),
                    rs.getDouble("precio"),
                    rs.getInt("stock")
                ));
            }
        } catch (SQLException e) {
            LoggerConfig.error("Error al listar productos", e);
        }
        return lista;
    }

    public boolean agregarProducto(Producto p) {
        String sql = "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)";
        try (Connection con = ConexionBD.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, p.getNombre());
            ps.setDouble(2, p.getPrecio());
            ps.setInt(3, p.getStock());
            ps.executeUpdate();
            LoggerConfig.info("Producto agregado: " + p.getNombre());
            return true;
        } catch (SQLException e) {
            LoggerConfig.error("Error al agregar producto", e);
            return false;
        }
    }
}
