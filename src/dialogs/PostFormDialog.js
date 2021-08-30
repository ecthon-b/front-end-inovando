import React from 'react';
import DialogForm from 'components/DialogForm';
import PostForm from 'forms/PostForm';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import AddButton from 'components/AddButton';

function PostFormDialog({
  onSubmit,
  initialValues,
  onClose = () => {},
  onAdd = () => {},
  open = false,
}) {
  return (
    <div>
      <DialogForm title="Post" open={open} onClose={onClose}>
        {({ onClose, deletarLinha }) => (
          <PostForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            footer={({ submitting }) => (
              <DialogActions>
                {!submitting && (
                  <Button onClick={onClose} color="primary">
                    Cancelar
                  </Button>
                )}
                <Button
                  onClick={deletarLinha}
                  variant="contained"
                  disabled={submitting}
                  type="delete"
                  color="secondary"
                >
                  Deletar
                </Button>
                <Button
                  variant="contained"
                  disabled={submitting}
                  type="submit"
                  color="primary"
                >
                  Enviar
                </Button>
              </DialogActions>
            )}
          />
        )}
      </DialogForm>
      <AddButton onClick={onAdd} />
    </div>
  );
}

export default PostFormDialog;
