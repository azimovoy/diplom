import React from 'react'
import ContentLoader from "react-content-loader"
import s from './Sceleton.module.scss'

const Sceleton = () => {
  return (
    <ContentLoader 
  speed={2}
  width={1320}
  height={1000} // Уменьшаем высоту контейнера, чтобы уместить все блоки
  viewBox="0 0 1320 1000"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  {/* Первый ряд */}
  <rect x="3" y="13" rx="20" ry="20" width="330" height="315" /> 
  <rect x="342" y="13" rx="20" ry="20" width="330" height="315" /> 
  <rect x="681" y="13" rx="20" ry="20" width="330" height="315" /> 
  <rect x="1020" y="13" rx="20" ry="20" width="330" height="315" /> 
  
  {/* Второй ряд */}
  <rect x="3" y="348" rx="20" ry="20" width="330" height="315" /> 
  <rect x="342" y="348" rx="20" ry="20" width="330" height="315" /> 
  <rect x="681" y="348" rx="20" ry="20" width="330" height="315" /> 
  <rect x="1020" y="348" rx="20" ry="20" width="330" height="315" /> 
  
  {/* Третий ряд */}
  <rect x="3" y="683" rx="20" ry="20" width="330" height="315" /> 
  <rect x="342" y="683" rx="20" ry="20" width="330" height="315" /> 
  <rect x="681" y="683" rx="20" ry="20" width="330" height="315" /> 
  <rect x="1020" y="683" rx="20" ry="20" width="330" height="315" /> 
</ContentLoader>
  )
}

export default Sceleton