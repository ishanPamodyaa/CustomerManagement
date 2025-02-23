package edu.icet.repocitory;

import edu.icet.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepocitory extends JpaRepository<CustomerEntity,Integer > {

    List<CustomerEntity> findByName(String name);
}

