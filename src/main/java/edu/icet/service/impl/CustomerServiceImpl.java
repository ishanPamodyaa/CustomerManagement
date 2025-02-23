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

    @Override
    public void updateCustomer(Customer customer) {

        repocitory.save(mapper.map(customer ,CustomerEntity.class));
    }

    @Override
    public Customer searchById(Integer id) {

      return mapper.map(repocitory.findById(id),Customer.class) ;
    }

    @Override
    public List<Customer> searchByName(String name) {

        List<Customer> customeerDto = new ArrayList<>();
       mapper.map(repocitory.findByName(name),Customer.class);
       List<CustomerEntity> allCustomerEntity = repocitory.findByName(name);

       allCustomerEntity.forEach(customerEntity -> {
           customeerDto.add(mapper.map(customerEntity ,Customer.class));
       });

       return customeerDto;


    }
}
