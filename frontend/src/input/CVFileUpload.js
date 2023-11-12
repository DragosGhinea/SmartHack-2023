import React, { useState } from 'react';
import extractTextFromPDF from '../api/processPDF'; 
import { Button, Typography } from '@mui/material';
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

const CVFileUpload = ({setPreferences}) => {
  const [pdfTitle, setPdfTitle] = useState()

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file === undefined){
      setPdfTitle(undefined)
      setPreferences((prevPreferences) => ({
        ...prevPreferences,
        pdfText: undefined,
      }));
      return;
    }

    setPdfTitle(file.name)

    extractTextFromPDF(file)
      .then((text) => {
        setPreferences((prevPreferences) => ({
          ...prevPreferences,
          pdfText: text,
        }));
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
      {pdfTitle && <Typography>Selected file: {pdfTitle}</Typography>}
    </>
  );
};

export default CVFileUpload;