import React, { useState } from 'react';
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    to_mail: '',
    subject: '',
    content: '',
    attachment_link: '',
  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="To Mail"
            name="to_mail"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />
          <TextField
            label="Attachment Link"
            name="attachment_link"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            error={!!errors.password}
            helperText={errors.password}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
