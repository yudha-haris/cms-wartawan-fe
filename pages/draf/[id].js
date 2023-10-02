import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DraftViewLayout from "@/components/Draf/DraftViewLayout";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getDraftDetailById } from '@/states/draft/action';

export default function ViewDrafBeritaById() {

    const BE_URI = "https://ta-aings-399219.uc.r.appspot.com";

    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [JWT_TOKEN, setJWT_TOKEN] = useState('');

    const draft_detail = useSelector((state) => state.draft_detail);
    const dispatch = useDispatch();

    useEffect( () => {
      if (id) {
        dispatch(getDraftDetailById({id}));
      } 
      
    }, [dispatch, id]);

    const getHeaders = () => {
        return {
          'Authorization': `Bearer ${JWT_TOKEN}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': BE_URI,
        };
      };

    // useEffect( () => {
    //     const token = localStorage.getItem('jwtToken');
    //     if (token) {
    //         setJWT_TOKEN(token);
    //     };

    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 BE_URI.concat(`/v1/draft/${id}`), 
    //                 { headers: getHeaders() });
                
    //             const data = response.data;
    //             setTitle(data.title);
    //             setContent(data.content);
                
    //         } catch (error) {
    //           console.error('Error fetching item:', error);
    //         }
    //       };
      
    //     fetchData();

    // }, [JWT_TOKEN, id]);

    const handleViewDraf = (id) => {
      router.push(`/draf/${id}`)
    };

    if (!draft_detail) {
      return (<div></div>)
    } 

    return (
        <DraftViewLayout title={draft_detail.title} content={draft_detail.content} />
    );
}