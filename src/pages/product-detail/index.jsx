import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useFetch} from "../../hooks/useFetch"

const ProductDetail = () => {
  const { id } = useParams(); 
  const {data,error,loading} = useFetch(`/recipes/${id}`)

  return (
    <>
      {error && (
        <div className="text-center text-red-500">
          {error?.response?.data?.message}
        </div>
      )}
      <div className="grid grid-cols-2">
        <div>
          <img src={data?.image} alt="" />
        </div>
        <div>{data?.name}</div>
      </div>
    </>
  );
};

export default ProductDetail;
