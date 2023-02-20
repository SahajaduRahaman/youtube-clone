import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../constant/constants'
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      bgcolor='black'
      alignItems="center" 
      p={2} 
      sx={{position: 'sticky', backgroung: '#000', top: 0, justifyContent: 'space-between', borderBottom: '1px solid #3d3d3d',}}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={30} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar