import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import DataTable from 'components/DataTable';
import useTable from 'hooks/useTable';
import PostFormDialog from 'dialogs/PostFormDialog';
import api from 'services/api';

const columns = [
  {
    name: 'id',
    label: 'Id',
  },
  {
    name: 'title',
    label: 'Title',
  },
  {
    name: 'body',
    label: 'Texto',
  },
];

function Posts() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState({});
  const { onRefresh, ...dataTableProps } = useTable('posts', {
    onRowClick,
  });

  function onRowClick(row) {
    setOpen(true);
    setPost(row);
  }

  const onSubmit = async values => {
    if (typeof values?.id === 'number') {
      const { id, ...form } = values;
      await api.put(`posts/${id}`, form);
    } else {
      await api.post('posts', values);
    }
    onRefresh();
    setPost({});
    setOpen(false);
  };

  return (
    <Container>
      <DataTable columns={columns} {...dataTableProps} />
      <PostFormDialog
        open={open}
        onClose={() => {
          setPost({});
          setOpen(false);
        }}
        onAdd={() => {
          setOpen(true);
        }}
        initialValues={post}
        onSubmit={onSubmit}
      />
    </Container>
  );
}

export default Posts;
