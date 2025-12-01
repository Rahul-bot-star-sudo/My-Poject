package org.example.form.dto;

public class StudentResponse {
    private String message;
    private String status;
    public StudentResponse(){}
    public StudentResponse(String message, String status){
        this.message = message;
        this.status = status;

    }
    public String getMessage(){
        return message;
    }
    public void setMassage(String message){
        this.message = message;
    }
    public String getStatus(){
        return status;
    }
    public void setStatus(String status){
        this.status = status;
    }
}
