import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GiftItems } from './GiftItems';
import { useFetchGifs } from './hooks/useFetchGifs';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      justifyContent:'center'
    },
  });


export  const GiftGrid = ({categoria}) => {
    const classes = useStyles();
const {data:images,loading}=useFetchGifs(categoria)


//  giftSearch();
    return (
<>
<h3>
    {categoria}
</h3>

{loading&&
    <Grid container  className={classes.root}>
<CircularProgress color="secondary" />
</Grid>
}
{/* <p className="animate__animated animate__lightSpeedInRight"> Loading...</p> */}

{/* <div className="card-grid  animate__animated animate__zoomIn"> */}
<Grid container spacing={3}>


          
        
{
    images.map(img=>(
        <Grid item xs={12} xl={3} sm={6} key={img.id} lg={3} md={6} >
        <GiftItems
        
        {...img}
        />

        </Grid>
        )     
        )
}

</Grid>

{/* </div> */}


</>
  
    )
}
