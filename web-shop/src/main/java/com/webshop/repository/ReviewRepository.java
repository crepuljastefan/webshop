package com.webshop.repository;
import com.webshop.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {


    List<Review> findAllByReviewedUserId(Long id);
    List<Review> findAllByReviewingUserIdAndReviewedUserId(Long reviewerId, Long reviewedId);
}
