import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DraftEditLayout from "@/components/Draf/DraftEditLayout";
import axios from 'axios';

export default function EditDrafBeritaById() {

    const BE_URI = "https://ta-aings-399219.uc.r.appspot.com";

    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loader, setLoader] = useState(false);

    const [JWT_TOKEN, setJWT_TOKEN] = useState('');

    const getHeaders = () => {
        return {
          'Authorization': `Bearer ${JWT_TOKEN}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': BE_URI,
        };
      };

    useEffect( () => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setJWT_TOKEN(token);
        };

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    // BE_URI.concat(`/v1/draft/${id}`),
                    `${BE_URI}/v1/draft/${id}`, 
                    { headers: getHeaders() });
                
                const data = response.data;
                setTitle(data.title);
                setContent(data.content);
                console.log(data);
                
            } catch (error) {
              console.error('Error fetching item:', error);
            }
          };
      
        fetchData();
        setLoader(true);

        console.log(title);
        console.log(content);
        
    }, [JWT_TOKEN]);

    return (
        <DraftEditLayout title={title} content={content} />
    );
}