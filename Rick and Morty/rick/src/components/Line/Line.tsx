import React from "react";
import "./Line.sass"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import store from "../../store/store";


interface IProps {
    name?: string,
    url?: string,
    image?: string,
}


export default function Line(props: IProps) :JSX.Element{
    const dispatch = useDispatch()

    const onClick = () => {

        dispatch({
            // @ts-ignore
            type: "create", value: [...store.getState().history.value,
                {
                    name: props.name,
                    url: props.url,
                    image: props.image,
                }]
        });
    }

    return (
        <Card sx={{ width: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={props.image || "https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson"}
                    alt={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <a href={props.url} target="_blank" rel="noreferrer">{props.url}</a>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={onClick}>
                    <Link to="character">Просмотреть</Link>
                </Button>
            </CardActions>
        </Card>
    );
}