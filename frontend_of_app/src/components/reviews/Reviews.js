import React from 'react';
import '../../styles/Reviews.css'; // Assuming you have defined your styles in this file

const Reviews = () => {
    return (
        <div className='reviews-container'>
            <h1 className='reviews-heading'>User Reviews</h1>
            <div className='review-card'>
                <div className='review-card-content'>
                    <img src='m-3.jpg' alt='User' className='review-avatar' />
                    <p className='review-date'>May.13, 2024 Thursday</p>
                    <h1 className='review-author'>Pretam Khan</h1>
                    <p className='review-text'>The quality of the blog is excellent.</p>
                </div>
            </div>
            <div className='review-card'>
                <div className='review-card-content'>
                    <img src='m-6.jpg' alt='User' className='review-avatar' />
                    <p className='review-date'>May.10, 2024 Thursday</p>
                    <h1 className='review-author'>Anurag Chashni</h1>
                    <p className='review-text'>The quality of the blog is good.</p>
                </div>
            </div>
            <div className='review-card'>
                <div className='review-card-content'>
                    <img src='m-1.jpg' alt='User' className='review-avatar' />
                    <p className='review-date'>April.14, 2024 Thursday</p>
                    <h1 className='review-author'>Golo Khan</h1>
                    <p className='review-text'>Best Quality i have ever seen by me.</p>
                </div>
            </div>
            <div className='review-card'>
                <div className='review-card-content'>
                    <img src='m-4.jpg' alt='User' className='review-avatar' />
                    <p className='review-date'>March.21, 2024 Thursday</p>
                    <h1 className='review-author'>Atak Zai</h1>
                    <p className='review-text'>Oh my God, Best Blog Ever i had seen.</p>
                </div>
            </div>
            <div className='review-card'>
                <div className='review-card-content'>
                    <img src='m-5.jpg' alt='User' className='review-avatar' />
                    <p className='review-date'>May.23, 2024 Thursday</p>
                    <h1 className='review-author'>Nawaz Ilam</h1>
                    <p className='review-text'>The quality of the blog is Great for me.</p>
                </div>
            </div>
            <div className='buttons_main-2'>
                <button className='btn_gala_2'>Prev</button>
                <button className='btn_gala_2'>1</button>
                <button className='btn_gala_2'>2</button>
                <button className='btn_gala_2'>3</button>
                <button className='btn_gala_2'>4</button>
                <button className='btn_gala_2'>5</button>
                <button className='btn_gala_2'>6</button>
                <button className='btn_gala_2'>7</button>
                <button className='btn_gala_2'>8</button>
                <button className='btn_gala_2'>Next</button>
            </div>
        </div>
    );
};

export default Reviews;
