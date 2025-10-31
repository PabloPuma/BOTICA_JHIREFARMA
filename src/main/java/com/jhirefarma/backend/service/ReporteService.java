package main.java.com.jhirefarma.backend.service;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import com.jhirefarma.backend.model.Producto;
import java.io.FileOutputStream;
import java.util.List;

public class ReporteService {
    public void generarExcel(List<Producto> productos) {
        try (Workbook wb = new XSSFWorkbook()) {
            Sheet hoja = wb.createSheet("Inventario");
            Row header = hoja.createRow(0);
            header.createCell(0).setCellValue("ID");
            header.createCell(1).setCellValue("Producto");
            header.createCell(2).setCellValue("Precio");
            header.createCell(3).setCellValue("Stock");

            int fila = 1;
            for (Producto p : productos) {
                Row row = hoja.createRow(fila++);
                row.createCell(0).setCellValue(p.getId());
                row.createCell(1).setCellValue(p.getNombre());
                row.createCell(2).setCellValue(p.getPrecio());
                row.createCell(3).setCellValue(p.getStock());
            }

            try (FileOutputStream out = new FileOutputStream("reporte_inventario.xlsx")) {
                wb.write(out);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
