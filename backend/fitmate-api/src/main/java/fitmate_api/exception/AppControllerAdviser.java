package fitmate_api.exception;


import fitmate_api.controller.response.error.CustomErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AppControllerAdviser {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(UserNotFoundException.class)
    public CustomErrorResponse handleNFException(Exception exception) {

        CustomErrorResponse customErrorResponse = new CustomErrorResponse();

        customErrorResponse.setMessage(exception.getMessage());

        return customErrorResponse;

    }

}
