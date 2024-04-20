package fitmate_api.exception;

public class UserNotFoundException extends NotFoundException{

    public UserNotFoundException(String message){
        super(message);
    }
}
