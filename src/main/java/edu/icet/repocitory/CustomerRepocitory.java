package edu.icet.repocitory;

import edu.icet.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepocitory extends JpaRepository<CustomerEntity,Integer > {
}
