import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const ProductDetail = () => {
  const { id } = useParams(); 
  const {data, error, loading} = useFetch(`/recipes/${id}`);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={data?.image} alt="" />
      </div>
      <div>{data?.name}</div>
    </div>
  );
};

export default ProductDetail;
