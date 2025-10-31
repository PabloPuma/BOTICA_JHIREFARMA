package main.java.com.jhirefarma.backend.service;

import java.util.List;
import java.util.concurrent.TimeUnit;
import com.google.common.cache.*;
import com.jhirefarma.backend.model.Producto;
import com.jhirefarma.backend.dao.ProductoDAO;
import java.util.List;
import java.util.concurrent.TimeUnit;
import main.java.com.jhirefarma.backend.dao.ProductoDAO;
import main.java.com.jhirefarma.backend.model.Producto;

public class InventarioService {
    private ProductoDAO dao = new ProductoDAO();
    private LoadingCache<Integer, Producto> cache = CacheBuilder.newBuilder()
            .expireAfterWrite(5, TimeUnit.MINUTES)
            .build(new CacheLoader<Integer, Producto>() {
                public Producto load(Integer id) {
                    return dao.listarProductos()
                            .stream()
                            .filter(p -> p.getId() == id)
                            .findFirst()
                            .orElse(null);
                }
            });

    public Producto obtenerProducto(int id) {
        try {
            return cache.get(id);
        } catch (Exception e) {
            return null;
        }
    }

    public List<Producto> listar() {
        return dao.listarProductos();
    }
}
