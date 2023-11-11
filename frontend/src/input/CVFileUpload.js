import React from 'react';
import extractTextFromPDF from './processPDF'; 
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const CVFileUpload = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    extractTextFromPDF(file)
      .then((text) => {
        console.log('Text extracted from the PDF:', text);
      })
      .catch((error) => {
        console.error('Error extracting text:', error);
      });
  };

  return (
    <>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
    </>
  );
};

export default CVFileUpload;