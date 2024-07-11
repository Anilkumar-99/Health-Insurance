import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import p3 from './p3.jpeg.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import { ClickAwayListener, Tooltip } from '@mui/material';

function Header() {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/admin");
    }

    const handleLogout = () => {
        // Add any logout logic here if needed
        navigate("/user");
    }

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <div className='text-center'>
            <header>
                <div className="d-flex justify-content-between align-items-center py-2 rounded fixed" style={{ background: '#f0f8ff' }}>
                    <div>
                        <img className="mx-3 ramana" src={p3} alt="my pic" title='RamanaSoft Insurance' style={{ borderRadius: '10px', cursor: 'pointer' }}></img>
                    </div>

                    <div className="ms-auto me-3">
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <div>
                                <Tooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={handleTooltipClose}
                                    open={open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title="1800-143-123"
                                >
                                    <Button onClick={handleTooltipOpen} className='text-center me-lg-4 text-nowrap'>
                                        <PhoneIcon />&nbsp;Call Us
                                    </Button>
                                </Tooltip>
                                <button onClick={handleLogout} type='button' className='btn btn-danger fw-bold'>Logout &nbsp;<i class="fa-solid fa-right-from-bracket"></i></button>
                            </div>
                        </ClickAwayListener>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
