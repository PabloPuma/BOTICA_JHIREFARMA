package com.jhirefarma.backend;

import com.jhirefarma.backend.service.*;
import com.jhirefarma.backend.model.Producto;

public class App {
    public static void main(String[] args) {
        InventarioService inventario = new InventarioService();
        ReporteService reporte = new ReporteService();

        // Mostrar productos
        inventario.listar().forEach(p -> 
            System.out.println(p.getNombre() + " - Stock: " + p.getStock())
        );

        // Generar reporte Excel
        reporte.generarExcel(inventario.listar());
        System.out.println("Reporte generado correctamente.");
    }
}
