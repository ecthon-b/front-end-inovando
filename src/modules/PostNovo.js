import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import PostForm from 'forms/PostForm';
import { useParams, useHistory } from 'react-router-dom';
import api from 'services/api';
import { toast } from 'react-toastify';

function PostNovo() {
  let { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState({});

  useEffect(() => {
    if (!id) return;

    async function getPost() {
      try {
        const { data } = await api.get(`post/${id}`);
        setPost(data);
      } catch {
        history.push('/post');
      }
    }

    getPost();
  }, [id, history]);

  const onSubmit = async values => {
    delete values.id;
    if (id) {
      await api.put(`post/${id}`, values);
      toast.success('Posts editado com sucesso!');
    } else {
      await api.post('post', values);
      toast.success('Posts cadastrado com sucesso!');
    }
    history.push('/post');
  };

  return (
    <Container>
      <Paper>
        <Box p={2}>
          <PostForm onSubmit={onSubmit} initialValues={post} />
        </Box>
      </Paper>
    </Container>
  );
}

export default PostNovo;
