package com.webshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webshop.model.Buyer;

@Repository
public interface BuyerRepository extends JpaRepository<Buyer, Long> {

}
