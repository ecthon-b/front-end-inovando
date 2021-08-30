import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import DataTable from 'components/DataTable';
import useTable from 'hooks/useTable';
import PostFormDialog from 'dialogs/PostFormDialog';

const columns = [
  {
    name: 'nome',
    label: 'Nome',
  },
];

function PostForm() {
  const [open, setOpen] = useState(false);
  const [postForm, setPostForm] = useState({});
  const dataTableProps = useTable('post-form', {
    onRowClick,
  });

  function onRowClick(row) {
    console.log('row:', row);
  }

  const onSubmit = values => {
    console.log('values:', values);
  };

  return (
    <Container>
      <DataTable columns={columns} {...dataTableProps} />
      <PostFormDialog
        open={open}
        onClose={() => {
          setPostForm({});
          setOpen(false);
        }}
        onAdd={() => {
          setOpen(true);
        }}
        initialValues={postForm}
        onSubmit={onSubmit}
      />
    </Container>
  );
}

export default PostForm;
