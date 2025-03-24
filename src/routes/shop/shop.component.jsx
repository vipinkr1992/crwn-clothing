import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';
import { useDispatch } from 'react-redux';
import { fetchCategoriesAsync, setCategories } from '../../store/categories/categories.action';
import { useEffect } from 'react';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchCategoriesAsync());
    }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;