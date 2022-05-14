import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";

function ModalInfo(props) {
  const { open, handleCloseModal, content } = props;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '80%',
    height: 600,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className="fs-5 text-info me-2">Tên sản phẩm:</span>
            {content.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className="fs-5 text-info me-2">Giá thành:</span>
            {content.price}$
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className="fs-5 text-info me-2">Số lượng còn lại:</span>
            {content.quantity}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className="fs-5 text-info me-2">Thông tin chi tiết:</span>
            {content.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalInfo;
