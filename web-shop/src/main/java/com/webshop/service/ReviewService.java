package com.webshop.service;

import com.webshop.dto.ReviewDto;
import com.webshop.model.Review;

import java.util.List;

public interface ReviewService {
    boolean reviewSeller(Long buyerId, Long sellerId, int score, String comment);
    boolean reviewBuyer(Long buyerId, Long sellerId, int score, String comment);

    List<ReviewDto> findByReviewedUserId(Long id);


    double getAverageRatingSeller(Long sellerId);
    double getAverageRatingBuyer(Long buyerId);
}
