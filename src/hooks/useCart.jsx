import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxioSecure';
import useAuth from './useAuth';

const useCart = () => {
  const { user } = useAuth;
  // const token = localStorage.getItem('access-token')
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
    // queryFn: async () => {
    //   const res = await fetch(`/carts?email=${user?.email}`, {
    //     headers: {
    //       authorization: `bearer ${token}`
    //     }
    //   });
    //   return res.json();
    // },
  });

  return [cart, refetch];
};

export default useCart;
