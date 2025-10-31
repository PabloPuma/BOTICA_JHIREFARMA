package main.java.com.jhirefarma.backend.util;

public class ValidacionUtils {
        public static boolean textoValido(String valor) {
        return StringUtils.isNotBlank(valor) && valor.length() > 2;
    }

    public static boolean precioValido(double precio) {
        return precio > 0;
    }
}
