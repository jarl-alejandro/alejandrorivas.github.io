import React from 'react'
import {
  Typography,
  ButtonBase
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  image: {
    position: 'relative',
    height: 250,
    width:  '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    transition: 'all ease .2s',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const Item = ({ item, classes, openModal }) => (
  <ButtonBase
    focusRipple
    className={classes.image}
    focusVisibleClassName={classes.focusVisible}
    onClick={e => openModal(item)}
  >
    <span
      className={classes.imageSrc}
      style={{ backgroundImage: `url(${item.images[0]})` }}
    />
    <span className={classes.imageBackdrop} />
    <span className={classes.imageButton}>
      <Typography
        component='span'
        variant='subheading'
        color='inherit'
        className={classes.imageTitle}
      >
        {item.title}
        <span className={classes.imageMarked} />
      </Typography>
    </span>

  </ButtonBase>
)

export default withStyles(styles)(Item)
