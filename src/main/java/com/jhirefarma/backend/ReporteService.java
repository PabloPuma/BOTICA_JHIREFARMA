package com.jhirefarma.backend;


import java.io.FileOutputStream;
import java.io.IOException;
public class ReporteService {
   private static final Logger log = LoggerFactory.getLogger(ReporteService.class);

    public void generarReporteExcel() {
        String[] headers = {"ID", "Producto", "Stock", "Precio"};
        Object[][] data = {
                {1, "Paracetamol 500mg", 250, "S/ 0.80"},
                {2, "Ibuprofeno 400mg", 120, "S/ 1.10"},
                {3, "Omeprazol 20mg", 300, "S/ 0.95"},
                {4, "Loratadina 10mg", 80, "S/ 1.25"},
                {5, "Amoxicilina 250mg", 90, "S/ 0.60"}
        };

        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet("Inventario");

            Row headerRow = sheet.createRow(0);
            for (int i = 0; i < headers.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(headers[i]);
            }

            for (int i = 0; i < data.length; i++) {
                Row row = sheet.createRow(i + 1);
                for (int j = 0; j < data[i].length; j++) {
                    row.createCell(j).setCellValue(data[i][j].toString());
                }
            }

            FileOutputStream out = new FileOutputStream("inventario.xlsx");
            workbook.write(out);
            out.close();
            log.info("📁 Reporte inventario.xlsx generado correctamente.");

        } catch (IOException e) {
            log.error("❌ Error generando el reporte Excel: {}", e.getMessage());
        }
    } 
}
