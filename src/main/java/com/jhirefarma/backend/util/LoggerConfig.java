package main.java.com.jhirefarma.backend.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerConfig {
    private static final Logger logger = LoggerFactory.getLogger(LoggerConfig.class);

    public static void info(String msg) {
        logger.info(msg);
    }

    public static void error(String msg, Exception e) {
        logger.error(msg, e);
    }
}
