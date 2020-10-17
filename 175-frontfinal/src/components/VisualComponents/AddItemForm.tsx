import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, MenuItem, TextField } from "@material-ui/core";
import ElectronicsType from "../../models/ElectronicsType";
import { depList } from "../../config/applConf";
import appFirebase from "../../config/firebaseConf";
import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             '& > *': {
//                 margin: theme.spacing(1),
//             },
//         },
//         input: {
//             display: 'none',
//         },
//     }),
// );


type Props = {
    onSubmit: (item: ElectronicsType)=>void
}


const AddItemForm: React.FC<Props> = (props: Props) => {

    const emptyForm = {
        id: 0,
        brand: "",
        model: "",
        department: "",
        price: 0,
        picture: "",
    }

    const makeFormEmpty = ()=>{
        setFormData({...emptyForm})
    }

    const [formData, setFormData] = useState<ElectronicsType>(emptyForm)

    const [isValid, setIsValid] = useState<boolean>(false);

    const[image, setImageToPush] = useState<any>(null);
    const[url, setUrl] = useState("");
    const[progress, setProgress]= useState(0);

    const[showButton, setShowButton] = useState<string>('block')
    const[showProgress, setShowProgress] = useState<string>('none')
    const[showImg, setShowImg] = useState<string>('none')

//Selector
    const [dep, setDep] = useState('')


    useEffect(() => {
        function validate(): boolean {
            return  !!(formData.id > 0
                && formData.brand
                && formData.model
                && formData.department
                && formData.price > 0
                && formData.picture)
        }

        console.log(JSON.stringify(formData))
        setIsValid(validate())
    }, [formData])


    useEffect(() => {
        if(image) {
            onUpload();
        }
    }, [image])

    //onReset function to reset department
    useEffect(() => {
      if(formData.department === ''){
          setDep('')
      }
    }, [formData])


    // const handlerInput = (event: React.ChangeEvent<{name: string ,value: React.ReactText }>) => {
    const handlerInput = (event: React.ChangeEvent<any>) => {
        if(event.target.name === "id"){
            formData.id = event.target.value as number;
        }
        if(event.target.name === "brand"){
            formData.brand = event.target.value as string;
        }
        if(event.target.name === "model"){
            formData.model = event.target.value as string;
        }
        if(event.target.name === "department"){
            setDep(event.target.value as string);
            formData.department = event.target.value as string;
        }
        if(event.target.name === "price"){
            formData.price = event.target.value as number;
        }
        setFormData({...formData})
    }

//Final actions
    const onSubmitHandler = async (event: any) => {
        event.preventDefault();
        await props.onSubmit(formData)
        makeFormEmpty();
        alert("Data has been uploaded")
    }

    const onResetHandler = () => {
        makeFormEmpty();
    }

//FireStore connections
    function onFileUpload(event:any) {
        if(event.target.files[0]){
            setImageToPush(event.target.files[0])
        }
    }
    function onUpload() {
        const uploadTask =  appFirebase.storage().ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot =>{
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setShowButton('none')
                setShowProgress('block')
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                appFirebase.storage()
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url)
                        setShowProgress('none')
                        setShowImg('block')

                        formData.picture = url;
                            setFormData({...formData})

                    })
            }
        )
    }




    return <React.Fragment>
            <form onSubmit={onSubmitHandler} onReset={onResetHandler} style={{"display": "flex","flexDirection": "column","alignItems": "center"}}>

                <div style={{"display": "flex",
                    "flexDirection": "row",
                    "maxWidth":"80vw",
                    "border":"1px solid black",
                    "borderRadius": "10px",
                    "justifyContent": "center",
                    "alignItems": "center",
                    // "overflow": "hidden",
                    "padding": "10px 10px"
                }}>

                <TextField disabled={false} variant={'outlined'} margin={'dense'} name={'id'} label="id" onChange={handlerInput}>{formData.id}</TextField>
                <TextField variant={'outlined'} margin={'dense'} name={'brand'} label="brand" onChange={handlerInput}>{formData.brand}</TextField>
                <TextField variant={'outlined'} margin={'dense'} name={'model'} label="model" onChange={handlerInput}>{formData.model}</TextField>


                    <FormControl variant="outlined" margin={'dense'} style={{"minWidth": 120}}>

                        <InputLabel id="demo-simple-select-outlined-label">department</InputLabel>
                        <Select
                            name='department'
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={dep}
                            onChange={handlerInput}
                            label="department"
                        >
                            {depList.map(deps =>
                                <MenuItem key={deps} value={deps}>{deps}</MenuItem>
                            )}

                        </Select>
                    </FormControl>

                <TextField variant={'outlined'} margin={'dense'} name={'price'} label="price" onChange={handlerInput}>{formData.price}</TextField>

                    <div>
                        <input style={{"display":"none"}}
                            // accept="image/*"
                            onChange={onFileUpload}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button style={{"display":showButton}} size="medium" variant="contained" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                        <progress style={{"display": showProgress}} value={progress} max="100"/>
                        <img style={{"display":showImg, "width": "40px", "height":"40px", "marginLeft":"2px", "border":"1px solid black"}} src={url} alt="firebase-image"/>
                    </div>

                </div>
              
             <div style={{"display": "flex","flexDirection": "column"}}>
                 <Button color={'primary'} disabled={!isValid} type={'submit'}>Submit</Button>
                 <Button color={'primary'} type={'reset'}>Reset</Button>
             </div>

            </form>
    </React.Fragment>
}
export default AddItemForm;

// "http://via.placeholder.com/50X60"

//TODO Deleting picture before sending form
//TODO Reset button
//TODO Styles to one useStyle
//TODO Image show bigger
//TODO Error handler onSubmit event
//TODO meke logic of Firestore outside component
//TODO validate propertly
//TODO field ID make auto generation from Fireserver
//TODO autogeneration of items
//TODO cleaning form issue