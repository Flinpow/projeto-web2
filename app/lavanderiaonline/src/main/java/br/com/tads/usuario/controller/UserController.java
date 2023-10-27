package br.com.tads.usuario.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import br.com.tads.commons.dto.response.EntitiesResponseDto;
import br.com.tads.commons.dto.response.EntityResponseDto;
import br.com.tads.commons.exception.UserWithDocumentAlreadyExistsException;
import br.com.tads.commons.exception.UserWithEmailAlreadyExistsException;
import br.com.tads.usuario.dto.request.CreateCustomerRequestDto;
import br.com.tads.usuario.entity.UserEntity;
import br.com.tads.usuario.service.UserServiceInterface;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

@RestController
public class UserController {

    private final UserServiceInterface service;

    public UserController(UserServiceInterface service) {
        this.service = service;
    }

    @GetMapping("/users/{id}")
    @ResponseBody
    public EntityResponseDto<UserEntity> getUserById(@PathVariable("id") long id) {
        UserEntity user = this.service.findById(id);

        if (user == null) {
            return new EntityResponseDto<>(null);
        }

        return new EntityResponseDto<>(user);
    }

    @GetMapping("/users/employees")
    @ResponseBody
    public EntitiesResponseDto<UserEntity> getEmployees() {
        List<UserEntity> users = this.service.findEmployees();

        return new EntitiesResponseDto<>(users);
    }

    @DeleteMapping("/users/{id}")
    @ResponseBody
    public StatusResponseDto deleteUserById(@PathVariable("id") long id) {
        this.service.deleteUserById(id);

        return new StatusResponseDto("deleted");
    }

    @PostMapping("/users/customer")
    @ResponseBody
    public EntitiesResponseDto<UserEntity> createCustomer(
            @RequestBody CreateCustomerRequestDto createCustomerRequestDto)
            throws UserWithEmailAlreadyExistsException, UserWithDocumentAlreadyExistsException {
        UserEntity user = this.service.createCustomer(createCustomerRequestDto);

        return new EntitiesResponseDto<>(user);
    }

    @ResponseStatus(value = HttpStatus.CONFLICT)
    @ExceptionHandler({ UserWithEmailAlreadyExistsException.class })
    public @ResponseBody ErrorResponseDto handleUserWithEmailAlreadyExistsException(HttpServletRequest request,
            Exception ex) {
        return new ErrorResponseDto(ex.getMessage());
    }

    @ResponseStatus(value = HttpStatus.CONFLICT)
    @ExceptionHandler({ UserWithDocumentAlreadyExistsException.class })
    public @ResponseBody ErrorResponseDto handleUserWithDocumentAlreadyExistsException(HttpServletRequest request,
            Exception ex) {
        return new EntitiesResponseDto(ex.getMessage());
    }

    @PostMapping("/users/employee")
    @ResponseBody
    public EntitiesResponseDto<UserEntity> createEmployee(
            @RequestBody CreateEmployeeRequestDto createEmployeeRequestDto)
            throws UserWithEmailAlreadyExistsException {
        System.out.println(createEmployeeRequestDto);
        UserEntity user = this.service.createEmployee(createEmployeeRequestDto);

        return new EntitiesResponseDto<>(user);
    }

    @PutMapping("/users/employee")
    @ResponseBody
    public EntitiesResponseDto<UserEntity> updateEmployee(
            @RequestBody UpdateEmployeeRequestDto updateClothingRequestDto)
            throws UserWithEmailAlreadyExistsException {
        System.out.println(updateClothingRequestDto);
        UserEntity user = this.service.updateEmployee(updateClothingRequestDto);

        return new EntitiesResponseDto<>(user);
    }
}
