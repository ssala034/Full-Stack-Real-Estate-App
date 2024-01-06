import React from 'react'
import { useQuery } from 'react-query'
import { getAllProperties } from '../utils/api';

const useProperties = () => {
    const {data, isLoading , isError, refetch} = useQuery(
        "allProperties", getAllProperties, {refetchOnWindowsFocus: false}
    );
  return {
    data, isError, isLoading, refetch
  }
    
}

export default useProperties
