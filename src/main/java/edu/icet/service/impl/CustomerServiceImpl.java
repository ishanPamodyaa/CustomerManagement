package edu.icet.service.impl;

import edu.icet.dto.Customer;
import edu.icet.entity.CustomerEntity;
import edu.icet.repocitory.CustomerRepocitory;
import edu.icet.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    final CustomerRepocitory repocitory;
    final ModelMapper mapper;


    @Override
    public void addCustomer(Customer customer) {

        repocitory.save(mapper.map(customer, CustomerEntity.class));


    }

    @Override
    public List<Customer> getAll() {

        List <Customer> customerlist = new ArrayList<>();

        List<CustomerEntity> allCustomer = repocitory.findAll();

        allCustomer.forEach( customerEntity -> {
            customerlist.add(mapper.map(customerEntity, Customer.class));
        } );

        return customerlist;
    }

    @Override
    public void deleteCustomer(Integer id) {

         repocitory.deleteById(id);
    }
}
