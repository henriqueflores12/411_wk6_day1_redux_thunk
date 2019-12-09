<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  Delete
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Delete Listing</MenuItem>
 
</Menu>