import { Alert, CircularProgress, Input, Table, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { FixedSizeList } from "react-window";
import './index.css'
const UniversityList = () =>{

    const [universityList, setUniversityList] = React.useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [renderList, setRenderList] = useState([]);
    useEffect(()=>{
        (async function(){
           setIsLoading(true);
            const response = await fetch('http://universities.hipolabs.com/search');
            const data = await response.json();
            setIsLoading(false);
            setUniversityList(data);
        })()
    },[])

    useEffect(()=>{
        setRenderList(universityList.slice(0,500))
        
    },[universityList])

    const filterList=(value, filterBy)=>{
        const list = universityList.slice(0,500)
        const filteredItems = value ? list.filter((item)=>{
            let length = value.length
            let i = 0;
            let hasPrefix = false;
            while(i < length){
                if(item[filterBy][i].toLowerCase() !== value[i].toLowerCase()) break;
                else {
                    if(i === length-1) hasPrefix = true;
                }
                i++;
            }
            if(hasPrefix) return {
                item
            };
        }) : list;
        return filteredItems;
    }

    const handleChange=(e, filterBy)=>{
        let value = e.target.value;
        setTimeout(() => {
            const filteredItems = filterList(value, filterBy);
            setRenderList(filteredItems)
        }, 0)
    }

return(<>{
        isLoading ? 
    <CircularProgress/> :<>
    <div className="list" >
    <Box sx={{ display: 'flex', alignItems: 'flex-end', float:'left'}}>
        <TextField 
        id="input-with-sx" label="Search By Universtity Name" 
        variant="standard" style={{background: 'white'}}
        onChange={(e)=>handleChange(e,'name')}
        />
      </Box>       
      
      <Box sx={{ display: 'flex', alignItems: 'flex-end', float:'right' }}>
        <TextField id="input-with-sx" label="Search By Country" 
        variant="standard" 
        style={{background: 'white'}}
        onChange={(e)=>handleChange(e,'country')}
        />
      </Box>
        {/* <FixedSizeList 
        className="List"
        itemData={renderList}
        itemCount= {renderList.length}
        itemSize={50}
        height={700}
        width={400}
        >{
            ({data,index,style})=>{
                return <><TableRow className="ListItemOdd" name = {`name${index}`} style={{...style,borderBottom:"none"}}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{data[index].name}</TableCell>
                <TableCell>{data[index].country}</TableCell>
                </TableRow></>
            }
        }       
        </FixedSizeList> */}
       
    { 
    renderList.length === 0 ? 
        <Alert severity="info" style={{width: "100%", height: "100%"}}>Sorry! No data available</Alert>:

      <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color: 'white', fontWeight: 'bolder'}}>
                            SNo.
                        </TableCell>
                        <TableCell style={{color: 'white', fontWeight: 'bolder'}}>
                            University Name
                        </TableCell>
                        <TableCell style={{color: 'white', fontWeight: 'bolder'}}>
                            University Country
                        </TableCell>
                        {/* <TableCell>
                            University WebPage
                        </TableCell> */}
                    </TableRow>
                </TableHead>
                    {renderList.map((university, index)=><>
                    <TableRow key={index}
                    className="listItem"
                    name = {`name${index}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell style={{padding: "10px"}}>{index+1}</TableCell>
                    <TableCell style={{padding: "10px"}}>{university.name} </TableCell>
                    <TableCell style={{padding: "10px"}}>{university.country}</TableCell>
                    {/* <TableCell>{university.web_pages}</TableCell> */}
                </TableRow></>)}
            </Table>
}
            </div>
         </>
    }</>)
}

export default UniversityList