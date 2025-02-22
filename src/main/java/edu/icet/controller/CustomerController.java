package edu.icet.controller;


import edu.icet.dto.Customer;
import edu.icet.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@RequiredArgsConstructor
public class CustomerController {
// http://localhost:8080/customer/add


    final CustomerService service;


    @PostMapping("/add")
    public void addCustomer(@RequestBody Customer customer){

        service.addCustomer(customer);

    }

    @GetMapping("/get-all")
    public List<Customer> getAll(){

        return service.getAll();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCustomer(@PathVariable Integer id){

        service.deleteCustomer(id);
    }

    @PutMapping

}
