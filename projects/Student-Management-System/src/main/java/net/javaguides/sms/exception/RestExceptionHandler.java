//package net.javaguides.sms.exception;
//
//import java.time.LocalDateTime;
//import java.util.Map;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.bind.annotation.RestControllerAdvice;
//
//@RestControllerAdvice(basePackages = "net.javaguides.sms.controllers")
//public class RestExceptionHandler {
//
//    @ExceptionHandler(InvalidIdException.class)
//    public ResponseEntity<?> handleInvalidId(InvalidIdException ex) {
//        return ResponseEntity
//                .status(HttpStatus.NOT_FOUND)
//                .body(Map.of(
//                    "timestamp", LocalDateTime.now(),
//                    "status", 404,
//                    "error", "Not Found",
//                    "message", ex.getMessage()
//                ));
//    }
//
//    @ExceptionHandler(DuplicateEmailException.class)
//    public ResponseEntity<?> handleDuplicateEmail(DuplicateEmailException ex) {
//        return ResponseEntity
//                .status(HttpStatus.CONFLICT)
//                .body(Map.of(
//                    "timestamp", LocalDateTime.now(),
//                    "status", 409,
//                    "error", "Conflict",
//                    "message", ex.getMessage()
//                ));
//    }
//
//    @ExceptionHandler(Exception.class)
//    public ResponseEntity<?> handleGeneric(Exception ex) {
//        return ResponseEntity
//                .status(HttpStatus.INTERNAL_SERVER_ERROR)
//                .body(Map.of(
//                    "timestamp", LocalDateTime.now(),
//                    "status", 500,
//                    "error", "Internal Server Error",
//                    "message", ex.getMessage()
//                ));
//    }
//}
